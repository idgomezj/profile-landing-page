from pydantic_ai import Agent
from pydantic_ai.models.openai import OpenAIModel
from pydantic_ai.providers.openai import OpenAIProvider
from pydantic_ai.providers.deepseek import DeepSeekProvider
from pydantic_ai.models.gemini import GeminiModel
from pydantic_ai.providers.google_gla import GoogleGLAProvider
import logging

from models import Profile, ProfileResponse
from data import profile, work_experience, education, research, congresses
from config import get_settings
from httpx import AsyncClient


logger = logging.getLogger(__name__)

provider = {
    "openai": OpenAIProvider,
    "deepseek": DeepSeekProvider,
    "gemini": GoogleGLAProvider
}

model = {
    "openai": OpenAIModel,
    "deepseek": OpenAIModel,
    "gemini": GeminiModel
}

settings = get_settings()
logger.info(f"Initialized agent with provider: {settings.provider}, model: {settings.model_name}")

def get_profile() -> Profile:
    logger.debug("Getting profile data")
    return profile

custom_http_client = AsyncClient(timeout=30)

agent = Agent(
    model[settings.provider](settings.model_name, provider=provider[settings.provider](api_key=settings.api_key)),
    deps_type=None,
    output_type=ProfileResponse,
    system_prompt="""You are Ivan Gomez's profile assistant. Your job is to answer questions about Ivan's skills, experience, and background based on his profile data.

IMPORTANT GUIDELINES:
1. Use tools only when necessary. Do not repeat tool calls unnecessarily.
2. Once you have gathered enough information using tools, STOP calling them and produce a final response.
3. Do NOT call the same tool more than once per response unless new data is absolutely required.
4. Be concise but informative in your main answer.
5. Provide a summary that includes:
   - Key points from your answer
   - Relevant skills and years of experience
   - Important context about Ivan's background
   - Any notable achievements or specializations
6. If asked about specific skills, mention years of experience where applicable.
7. If the question cannot be answered with available profile data, say so clearly.
8. Do not generate unnecessary repetition or excessive detail.
9. All experience was in parallel, so the years of experience are not cumulative.
10. Isf he has not experience on something, say so clary. But show how he can learn fast and how he has experience in others tech relate which make that learning process easier. Make sure thos etechnologis you list is relate with the one they are asking about.

RESPONSE FORMAT:
- answer: Direct response to the user's question
- summary: Concise summary of relevant information
- confidence: Your confidence level (0.0 to 1.0)
- sources_used: List of tools or data sources used (e.g., ["fetch_profile", "get_experience_overview"])

Ensure the response is complete and avoids any circular or redundant tool usage.
"""
)

logger.info("Agent initialized successfully")


@agent.tool_plain
def fetch_profile() -> Profile:
    """Fetch the full profile data for Ivan Gomez."""
    logger.info("Tool called: fetch_profile")
    logger.debug(f"Fetching profile data for {profile.name}")
    try:
        profile_data = get_profile()
        logger.info(f"Successfully fetched profile for {profile_data.name}")
        return profile_data
    except Exception as e:
        logger.error(f"Error fetching profile: {str(e)}")
        raise

@agent.tool_plain
def get_technology_experience() -> str:
    """Get a comprehensive summary of all Ivan's skills and experience."""
    logger.info("Tool called: get_technology_experience")
    logger.debug(f"Getting comprehensive summary for {profile.name}")

    try:
        profile_data = get_profile()
        
        summary_parts = []
        summary_parts.append(f"**{profile_data.name}** - {profile_data.title}")
        summary_parts.append(f"**Professional Summary:** {profile_data.summary}")
        summary_parts.append("")
        summary_parts.append("**Skills & Experience by Category:**")
        for experience in profile_data.experience:
            summary_parts.append(f"\n**Group {experience[0]}:**")
            for section in experience[1]:
                summary_parts.append(f"\n*Sub-Group {section.category}:*")
                for item in section.items:
                    summary_parts.append(f"  • {item.title}: {item.years} years")
            
        summary = "\n".join(summary_parts)
        logger.info(f"Generated comprehensive summary with {len(summary_parts)} sections")
        logger.debug(f"Summary length: {len(summary)} characters")
        return summary
    except Exception as e:
        logger.error(f"Error generating comprehensive summary: {str(e)}")
        raise

@agent.tool_plain
def get_work_experience() -> str:
    """Get Ivan's work experience."""
    logger.info("Tool called: get_work_experience")
    logger.debug(f"Getting work experience for {profile.name}")
    return work_experience
    
@agent.tool_plain
def get_education() -> str:
    """Get Ivan's education."""
    logger.info("Tool called: get_education")
    logger.debug(f"Getting education for {profile.name}")
    return education

@agent.tool_plain
def get_research() -> str:
    """Get Ivan's research."""
    logger.info("Tool called: get_research")
    logger.debug(f"Getting research for {profile.name}")
    return research

@agent.tool_plain
def get_congresses() -> str:
    """Get Ivan's congresses."""
    logger.info("Tool called: get_congresses")
    logger.debug(f"Getting congresses for {profile.name}")
    return congresses

@agent.tool_plain
def get_research_and_congresses() -> str:
    """Get Ivan's research and congresses."""
    logger.info("Tool called: get_research_and_congresses")
    logger.debug(f"Getting research and congresses for {profile.name}")
    return research + "\n" + congresses
    
# Add a function to log agent responses
def log_agent_response(question: str, response: ProfileResponse):
    """Log agent responses for monitoring and debugging."""
    logger.info(f"Agent response generated for question: '{question[:100]}...'")
    logger.info(f"Response confidence: {response.confidence}")
    logger.info(f"Sources used: {response.sources_used}")
    logger.debug(f"Answer length: {len(response.answer)} characters")
    logger.debug(f"Summary length: {len(response.summary)} characters")

logger.info("All agent tools initialized successfully")
