from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache
class Settings(BaseSettings):
    api_key: str
    model_name: str = "gpt-4o"
    provider: str = "openai"
    frontend_url: str = "http://localhost:3000"
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8"
    )

@lru_cache()
def get_settings():
    return Settings()

