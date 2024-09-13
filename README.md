
# YouTube Web App Server/Backend

This project serves as the backend for a web application designed to replicate core features and user interface elements of YouTube. The backend handles all server-side operations, including data management, user authentication, and video-related functionalities. It demonstrates proficiency in building a scalable and secure server using modern technologies and practices.


## Features

- User Authentication: Secure user authentication and authorization using JSON Web Tokens (JWT) and Bcrypt for password hashing.
- Video Management: Handles video uploads, metadata storage, and retrieval, supporting functionalities such as video playback controls, thumbnails, titles, and additional details.
- Channel Management: Manages channel-related data, including subscriptions, channel information, and interactions.
- Search Functionality: Supports search queries to retrieve video and channel information based on user input.
- Comments and Likes: Implements features for users to comment on videos and like or dislike content.
- Responsive and Scalable: Designed to efficiently handle requests and scale with growing user bases and video content.- 
## Tech Stack and Libraries

**Server:** Node, Express, Mongoose, JsonWebToken, Bcrypt JS, Cookie-Parser

**Database:** MongoDB

**Client:** React with Vite, Redux, TailwindCSS, Google Firebase, axios


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`  

`PORT` 

`JWT_SECRET`

To generate 64 bytes JWT_SECRET String 

Open Terminal
```bash
node
```
After entering in the node environment Copy and paste this line.

```bash
require('crypto').randomBytes(32).toString('hex')
```
## Run Locally

Clone the project

```bash
git clone https://github.com/whoshriyansh/youtube_web_app_server server
```

Go to the project directory

```bash
cd server
```

Install dependencies

```bash
npm install
```

Start the server in Development Environment

```bash
npm run dev
```


## Authors

- [@whoshriyansh](https://www.linkedin.com/in/whoshriyansh/)
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-orange?style=for-the-badge&logo=ko-fi&logoColor=white)](https://whoshriyansh.vercel.app/)

[![linkedin](https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/whoshriyansh/)

[![twitter](https://img.shields.io/badge/X-000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://x.com/whoshriyansh)

[![Instagram](https://img.shields.io/badge/Instagram-E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/whoshriyansh)
