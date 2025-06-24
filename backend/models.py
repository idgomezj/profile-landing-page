from pydantic import BaseModel
from typing import List

class Experience(BaseModel):
    title: str
    years: float

class Section(BaseModel):
    category: str
    items: List[Experience]

class Profile(BaseModel):
    name: str
    title: str
    summary: str
    experience: List[Section]

class ProfileResponse(BaseModel):
    answer: str
    summary: str
    confidence: float = 0.8
    sources_used: List[str] = []
