from fastapi import APIRouter, HTTPException
from module import User, UserCreate
from db import get_db_connection

router = APIRouter()

@router.post("/users/", response_model=User)
def create_user(user: UserCreate):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO users (username, email, full_name) VALUES (%s, %s, %s) RETURNING id, username, email, full_name",
            (user.username, user.email, user.full_name)
        )
        new_user = cursor.fetchone()
        conn.commit()
        cursor.close()
        conn.close()
        return new_user
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
