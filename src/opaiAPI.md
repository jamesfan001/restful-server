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

curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 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" \
  -d '{
    "model": "gpt-4o-mini",
    "store": true,
    "messages": [
      {"role": "user", "content": "Who is the POTUS?"}
    ]
  }'