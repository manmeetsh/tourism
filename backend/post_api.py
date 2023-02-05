import aiomysql
import jwt
import traceback
from fastapi import APIRouter, HTTPException, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.requests import Request
from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import db_connect as db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    email: str
    country: str
    remarks: str


@app.post("/submit_details")
async def submit(item: Item):
    with db.mysql_connect() as my_db:
        cursor = my_db.cursor(dictionary=True)

        # breakpoint()

        sql = f"insert into tourism (email,name,country,remarks) values ('{item.email}','{item.name}','{item.country}','{item.remarks}');"
        cursor.execute(sql)
        my_db.commit()

        return {"details": item}
