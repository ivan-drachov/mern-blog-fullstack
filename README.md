# mern-blog-fullstack
How to deploy:

1. cd server-mern-blog

    1.1 npm install
  
    1.2 npm run dev
  
    1.3 touch .env
  
      add next lines into the .env file:
      
        PORT=YOUR_PORT
        
        DB_USER=YOUR_MONGODB_USER
        
        DB_PASSWORD=YOUR_MONGODB_USER_PASSWORD
        
        DB_NAME=YOUR_MONGODB_NAME
        
        JWT_SECRET=YOUR_JWT_SECRET
        
2. cd client-mern-blog

    2.1 npm install
  
    2.2 npm run start
