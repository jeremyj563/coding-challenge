# Coding Challenge

## Links
- [Challenge Document](https://docs.google.com/document/d/1d9ZM4tSd9lq7PUOjfgm6nKITpUbGcyUbB2rcA1O55Ho/edit?usp=sharing)
- [MongoDB Official Docker Image](https://hub.docker.com/_/mongo)
- [MongoDB on Windows in Minutes with Docker](https://blog.jeremylikness.com/blog/2018-12-27_mongodb-on-windows-in-minutes-with-docker/)
- [Setting Up a MongoDB Service Under Windows via PowerShell](https://studio3t.com/knowledge-base/articles/setup-mongodb-windows-powershell/)
- [A Beginner-Level Introduction to MongoDB with Node.js](https://stackabuse.com/a-beginner-level-introduction-to-mongodb-with-node-js)

## MongoDB Docker Container
Run MongoDB container instance **without authentication**
```
PS > docker run -d -p 27017:27017 --name mongo-cc mongo:latest
```