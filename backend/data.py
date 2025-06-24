from models import Profile, Section, Experience

profile = Profile(
    name="Ivan Gomez",
    title="Sr Software Engineer",
    summary="Full‑stack, AI, Data, DevOps and Cloud",
    experience=[
        Section( category="Backend", items=[Experience(title="Python", years=8), Experience(title="Golang", years=4), Experience(title="Rust", years=2)]),
        Section( category="CI/CD", items=[Experience(title="GitHub Actions", years=4), Experience(title="Jenkins", years=5), Experience(title="ArgoCD", years=3)]),
        Section( category="Infrastructure", items=[Experience(title="AWS", years=5), Experience(title="Kubernetes", years=3)]),
        Section( category="Data & AI", items=[Experience(title="PostgreSQL", years=5), Experience(title="PyTorch", years=2), Experience(title="Hugging Face", years=2)]),
    ]
)
