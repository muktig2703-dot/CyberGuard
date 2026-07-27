from fastapi import FastAPI

app = FastAPI(
    title="CyberGuard API",
    version="1.0.0",
    description="AI-Powered Cyber Attack Detection and Autonomous Response Platform"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to CyberGuard API 🚀"
    }