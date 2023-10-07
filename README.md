# Bus-Tracker-Special-Server
This is a special local server, a part of my [Madrasa Management System](https://github.com/SHADOWZXCV/Wezzaa) server, but made separately.

## Functionality & Purpose
Its purpose is to:
- Make new admin school emails, so that they can register.
- Send activation codes to those emails, so that they can activate their account.

## How to use
1. Install the server:
    ```bash
    npm install
    npm run dev
    ```
2. Use insomnia, postman or curl, to send requests to the server.
    
    Request body:
    ```json
    {
        "email": "school_email@example.com"
    }
    ```
    Curl example:
    ```bash
    curl -XPOST -H "Content-type: application/json" -d '{
        "email": "school_email@example.com"
    }' 'http://localhost:3001/signup'
    ```