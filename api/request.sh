curl -X POST http://127.0.0.1:8000/ \
-H "Content-Type: application/json" \
-d "{\"text\": \"what's 3+3\"}"

uvicorn main:app --reload