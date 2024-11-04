from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import ollama
from pydantic import BaseModel

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextRequest(BaseModel):
    text: str


@app.post("/")
async def read_root(request: TextRequest) -> dict[str, str]:

    if not request.text:
        raise HTTPException(status_code=400, detail="Request Error: Text Missing")

    try:
        response = ollama.chat(model="llama3.2", messages=[
            {
                "role": "user",
                "content": request.text
            }
        ])
        ollama_resp = response.get('message', {}).get('content', '')
        return {"Response": ollama_resp}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
