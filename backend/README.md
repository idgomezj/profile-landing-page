# Ivan Gomez – Profile AI Bot

A simple AI-powered backend that answers questions about Ivan Gomez’s profile.  
Built with **FastAPI**, **PydanticAI**, and an LLM (e.g. OpenAI’s GPT‑4).

## 🚀 Features

- Load your profile from a Pydantic model.
- Expose a `/ask` endpoint to query your profile.
- Use PydanticAI agent with `fetch_profile()` tool to ground answers.
- Securely load OpenAI API key via `.env` → config → agent.

---

## 🧰 Tech Stack

- **FastAPI** – modern, high‑performance web framework :contentReference[oaicite:1]{index=1}  
- **PydanticAI** – typed LLM agent framework by Pydantic :contentReference[oaicite:2]{index=2}  
- **Uvicorn** – ASGI server  
- **python-dotenv** & **pydantic-settings** – configuration via `.env`

---

## ⚙️ Quick Start

1. Clone this repo:
    ```bash
    git clone https://github.com/idgomezj/profile-landing-page.git
    cd repo
    ```

2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Create a `.env` file:
    ```
    api_key=...
    model_name=gemini-2.0-flash
    provider=gemini
    frontend_url=http://localhost:3000
    ```

Note.: You can select openAI, DeepSeek or Gemini as LLM resource.

4. Run the app:
    ```bash
    uvicorn main:app --reload
    ```

5. Open API docs:  
   - Swagger UI: `http://localhost:8000/docs`  
   - Redoc: `http://localhost:8000/redoc`  

6. Ask to the bot:
    ```bash
    curl --location 'http://localhost:8000/ask' \
        --header 'Content-Type: application/json' \
        --data '{
        "question": "How many years have you worked with Kubernetes?"
        }'
    ```

---

## 🔧 Configuration

`config.py` uses **Pydantic Settings** to load `.env` securely:

```python
class Settings(BaseSettings):
    openai_api_key: str

    model_config = SettingsConfigDict(env_file=".env")
```

## Run Service

```bash
python3 -m uvicorn main:app --host 0.0.0.0 --reload
```