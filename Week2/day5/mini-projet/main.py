import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Database connection parameters
DB_CONFIG = {
    "dbname": os.getenv("POSTGRES_DB", "dev"),
    "user": os.getenv("POSTGRES_USER", "postgres"),
    "password": os.getenv("POSTGRES_PASSWORD", "Bouchra05"),
    "host": os.getenv("POSTGRES_HOST", "localhost"),
    "port": os.getenv("POSTGRES_PORT", "5432"),
}

# Initialize FastAPI application
app = FastAPI()

# Pydantic models for request/response validation
class UserBase(BaseModel):
    username: str
    email: str
    full_name: Optional[str] = None

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int

# Function to get database connection
def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    return conn

# Create a new user
@app.post("/users/", response_model=User)
def create_user(user: UserCreate):
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
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

# Get list of users with pagination
@app.get("/users/", response_model=List[User])
def read_users(skip: int = 0, limit: int = 100):
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute(
            "SELECT id, username, email, full_name FROM users LIMIT %s OFFSET %s",
            (limit, skip)
        )
        users = cursor.fetchall()
        conn.close()
        return users
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Get user by ID
@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int):
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute(
            "SELECT id, username, email, full_name FROM users WHERE id = %s",
            (user_id,)
        )
        user = cursor.fetchone()
        conn.close()
        if user is None:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Update user information
@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user: UserBase):
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute(
            "UPDATE users SET username = %s, email = %s, full_name = %s WHERE id = %s RETURNING id, username, email, full_name",
            (user.username, user.email, user.full_name, user_id)
        )
        updated_user = cursor.fetchone()
        conn.commit()
        conn.close()
        if updated_user is None:
            raise HTTPException(status_code=404, detail="User not found")
        return updated_user
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Delete user by ID
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "DELETE FROM users WHERE id = %s RETURNING id",
            (user_id,)
        )
        deleted_user = cursor.fetchone()
        conn.commit()
        conn.close()
        if deleted_user is None:
            raise HTTPException(status_code=404, detail="User not found")
        return {"message": "User deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

