from pydantic_ai import Agent
from pydantic_ai.models.openai import OpenAIModel
from pydantic_ai.providers.openai import OpenAIProvider
from pydantic_ai.providers.deepseek import DeepSeekProvider
from pydantic_ai.models.gemini import GeminiModel
from pydantic_ai.providers.google_gla import GoogleGLAProvider
import logging

from models import Profile, ProfileResponse
from data import profile
from config import get_settings
from httpx import AsyncClient

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('agent.log'),
        logging.StreamHandler()
    ]
)
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
        logger.debug(f"Profile contains {len(profile_data.experience)} experience sections")
        return profile_data
    except Exception as e:
        logger.error(f"Error fetching profile: {str(e)}")
        raise

@agent.tool_plain
def get_comprehensive_summary() -> str:
    """Get a comprehensive summary of all Ivan's skills and experience."""
    logger.info("Tool called: get_comprehensive_summary")
    logger.debug(f"Getting comprehensive summary for {profile.name}")
    
    try:
        profile_data = get_profile()
        
        summary_parts = []
        summary_parts.append(f"**{profile_data.name}** - {profile_data.title}")
        summary_parts.append(f"**Professional Summary:** {profile_data.summary}")
        summary_parts.append("")
        summary_parts.append("**Skills & Experience by Category:**")
        
        for section in profile_data.experience:
            summary_parts.append(f"\n**{section.category}:**")
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
def get_skill_experience(skill_name: str) -> str:
    """Get specific information about a skill or technology."""
    logger.info(f"Tool called: get_skill_experience with skill_name='{skill_name}'")
    
    try:
        profile_data = get_profile()
        
        for section in profile_data.experience:
            for item in section.items:
                if skill_name.lower() in item.title.lower():
                    result = f"{item.title}: {item.years} years of experience"
                    logger.info(f"Found skill '{skill_name}' in {section.category}: {item.title} ({item.years} years)")
                    return result
        
        logger.warning(f"No specific information found for skill: {skill_name}")
        return f"No specific information found for {skill_name}"
    except Exception as e:
        logger.error(f"Error getting skill experience for '{skill_name}': {str(e)}")
        raise

@agent.tool_plain
def get_category_experience(category: str) -> str:
    """Get all skills and experience in a specific category."""
    logger.info(f"Tool called: get_category_experience with category='{category}'")
    
    try:
        profile_data = get_profile()
        
        for section in profile_data.experience:
            if category.lower() in section.category.lower():
                skills = [f"{item.title} ({item.years} years)" for item in section.items]
                result = f"{section.category}: {', '.join(skills)}"
                logger.info(f"Found category '{category}' with {len(skills)} skills")
                logger.debug(f"Skills in {section.category}: {skills}")
                return result
        
        logger.warning(f"No information found for category: {category}")
        return f"No information found for category: {category}"
    except Exception as e:
        logger.error(f"Error getting category experience for '{category}': {str(e)}")
        raise

@agent.tool_plain
def get_top_skills(top_n: int = 5) -> str:
    """Get Ivan's top skills by years of experience."""
    logger.info(f"Tool called: get_top_skills with top_n={top_n}")
    
    try:
        profile_data = get_profile()
        
        all_skills = []
        for section in profile_data.experience:
            for item in section.items:
                all_skills.append((item.title, item.years))
        
        logger.debug(f"Total skills found: {len(all_skills)}")
        
        # Sort by years of experience (descending)
        all_skills.sort(key=lambda x: x[1], reverse=True)
        
        top_skills = all_skills[:top_n]
        result = f"Top {top_n} skills by experience: " + ", ".join([f"{skill} ({years} years)" for skill, years in top_skills])
        
        logger.info(f"Generated top {len(top_skills)} skills")
        logger.debug(f"Top skills: {top_skills}")
        return result
    except Exception as e:
        logger.error(f"Error getting top skills: {str(e)}")
        raise

@agent.tool_plain
def get_experience_overview() -> str:
    """Get an overview of Ivan's experience across all categories."""
    logger.info("Tool called: get_experience_overview")
    
    try:
        profile_data = get_profile()
        
        overview = []
        overview.append(f"**{profile_data.name}** - {profile_data.title}")
        overview.append(f"**Summary:** {profile_data.summary}")
        overview.append("")
        overview.append("**Experience Overview:**")
        
        for section in profile_data.experience:
            total_years = sum(item.years for item in section.items)
            skill_count = len(section.items)
            overview.append(f"• **{section.category}:** {skill_count} skills, {total_years} total years")
            logger.debug(f"Category {section.category}: {skill_count} skills, {total_years} total years")
        
        result = "\n".join(overview)
        logger.info(f"Generated experience overview with {len(profile_data.experience)} categories")
        return result
    except Exception as e:
        logger.error(f"Error generating experience overview: {str(e)}")
        raise

@agent.tool_plain
def get_profile_details() -> str:
    """Get detailed profile information for comprehensive summaries."""
    logger.info("Tool called: get_profile_details")
    
    try:
        profile_data = get_profile()
        
        details = []
        details.append(f"**Name:** {profile_data.name}")
        details.append(f"**Title:** {profile_data.title}")
        details.append(f"**Professional Summary:** {profile_data.summary}")
        details.append("")
        details.append("**Detailed Experience Breakdown:**")
        
        total_skills = 0
        total_years = 0
        
        for section in profile_data.experience:
            details.append(f"\n**{section.category}:**")
            section_years = sum(item.years for item in section.items)
            total_years += section_years
            total_skills += len(section.items)
            details.append(f"Total experience in this category: {section_years} years")
            for item in section.items:
                details.append(f"  • {item.title}: {item.years} years")
        
        result = "\n".join(details)
        logger.info(f"Generated detailed profile with {total_skills} total skills and {total_years} total years")
        logger.debug(f"Profile details length: {len(result)} characters")
        return result
    except Exception as e:
        logger.error(f"Error generating profile details: {str(e)}")
        raise

# Add a function to log agent responses
def log_agent_response(question: str, response: ProfileResponse):
    """Log agent responses for monitoring and debugging."""
    logger.info(f"Agent response generated for question: '{question[:100]}...'")
    logger.info(f"Response confidence: {response.confidence}")
    logger.info(f"Sources used: {response.sources_used}")
    logger.debug(f"Answer length: {len(response.answer)} characters")
    logger.debug(f"Summary length: {len(response.summary)} characters")

logger.info("All agent tools initialized successfully")
