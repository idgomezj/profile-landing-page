from pydantic import BaseModel
from typing import List

class ExperienceData(BaseModel):
    title: str
    years: float

class Section(BaseModel):
    category: str
    items: List[ExperienceData]

class Experience(BaseModel):
    ai_data: List[Section]
    language: List[Section]
    framework: List[Section]
    infra: List[Section]
    ci_cd: List[Section]
    tools: List[Section]

class Profile(BaseModel):
    name: str
    title: str
    summary: str
    experience: Experience

class ProfileResponse(BaseModel):
    answer: str
    summary: str
    confidence: float = 0.8
    sources_used: List[str] = []