Prisma/Docker Setup with a local DB

Step 1: Install Docker (Will need to create an account with Docker & Verify Email)
https://hub.docker.com/editions/community/docker-ce-desktop-mac

A: Once installation is completed you will be asked to login

-----------

Getting a local MYSQL DB 
(Tutorial followed: https://www.youtube.com/watch?v=CORQo5rooX8)

A: prisma init

Choose
- Create new database
- MYSQL
- Prisma Javascript Client


B: docker-compose up -d

C: prisma deploy

For GraphQL Playground
D: prisma playground 

For viewing and editing data through Prisma
http://localhost:4466/_admin

