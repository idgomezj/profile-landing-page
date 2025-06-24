# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agent import agent, logger, log_agent_response
from models import ProfileResponse
from start_message import start_message
from config import get_settings


app = FastAPI(title="Ivan's Profile AI Assistant")
settings = get_settings()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],  # Add your frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


start_message(settings)

class AskRequest(BaseModel):
    question: str

@app.post("/ask", response_model=ProfileResponse)
async def ask_bot(req: AskRequest):
    """Ask a question about Ivan's profile and get an AI-generated answer with automatic summary."""
    logger.info(f"Received question: '{req.question[:100]}...'")
    
    try:
        # Pass user's question to the PydanticAI agent
        logger.info("Calling agent.run()")
        result = await agent.run(req.question)
        
        # Log the response
        log_agent_response(req.question, result.output)
        
        logger.info("Successfully generated response")
        return result.output
    except Exception as e:
        logger.error(f"Error processing question: {str(e)}")
        error_response = ProfileResponse(
            answer=f"Sorry, I encountered an error while processing your question: {str(e)}",
            summary="Unable to generate summary due to error.",
            confidence=0.0,
            sources_used=[]
        )
        return error_response

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    logger.info("Health check requested")
    return {"status": "healthy", "message": "Ivan's Profile AI Assistant is running"}

logger.info("FastAPI application initialized")
