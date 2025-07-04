from models import Profile, Section, Experience, ExperienceData
import json

with open('./data/profile.json', 'r') as file:
    profile_data = json.load(file)
    experience = Experience(
        ai_data=[],
        language=[],
        framework=[],
        infra=[],
        ci_cd=[],
        tools=[]
    )
    for key, value in profile_data.items():
        setattr(
            experience,
            key,
            [
                Section( 
                category=item['title'], 
                items= [ExperienceData(title=i['name'], years=i['years']) for i in item['items']]
                ) for item in value
            ]
        )

profile = Profile(
    name="Ivan Gomez",
    title="Sr Software Engineer",
    summary="Full‑stack, AI, Data, DevOps and Cloud",
    experience=experience
)
