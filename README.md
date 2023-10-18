# Harmonia
A full-stack application created with:

 - **Supabase** 💾 - as a placeholder for **PostgreSQL** database, authentication etc.
 - **Prisma ORM** 🏳️‍🌈⃤  - for creating and manipulating SQL models of the database
 - **Apollo Server & Client** 🚀- to create a full-stack connection based on **GraphQL**
 - **Next.js** 💻 - as a great client-side, optimized framework 
 - **MaterialUI** 🎨 - for designing a user-friendly interface


## Setup

This repository is created in a **monorepository** style which means that all of the shared dependencies can be installed with `npm install` run from the root folder. The root folder `package.json` also contains handy scripts that can let you run server- or client-related scripts instead of entering a specific workspace and running them there, e.g.:

**Run both the server and the client concurrently**

    npm run app

**Run Prisma Studio and Apollo Server concurrently**

    npm run server
  
**Run Apollo Server only**

    npm run server:graphql
    // Apollo Server runs on localhost:4000
    
   **Run Prisma Studio only**

    npm run server:prisma
    // Prisma Studio runs on localhost:5555


