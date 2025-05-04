from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from app.model import predict_image
import shutil
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    file_path = "temp.jpg"
    with open(file_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    result = predict_image(file_path)
    os.remove(file_path)
    return {"result": result}
