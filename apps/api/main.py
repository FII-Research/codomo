from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/assistant")
async def assistant(request: Request):
    data = await request.json()
    prompt = data.get("prompt", "")
    return {"response": f"You said: {prompt}"}
