Project Name: StudyBuddy Deliverable 3

Student Name: Arfan Ali Galib

Project Structure:
- client: React frontend
- server: Node/Express backend
- MongoDB Atlas used for database storage

How to Run the Project:

1. Open terminal and go to the server folder:
   cd server

2. Install dependencies:
   npm install

3. Open server/config/db.js and replace <YOUR_MONGODB_ATLAS_URI> with your real MongoDB Atlas connection string.

4. Start the backend server:
   npm start

5. Open another terminal and go to the client folder:
   cd client

6. Install dependencies:
   npm install

7. Start the React frontend:
   npm run dev

8. Open the browser using the Vite localhost link shown in terminal.

Server Port:
- Backend runs on port 5000

Frontend Features:
- Home page
- Tasks page
- Add Task page
- Edit Task page
- About page
- 404 page
- React Router navigation
- Axios calls to backend
- Daily advice / motivation feature

Backend Features:
- Express server
- MongoDB Atlas connection
- Mongoose model
- CRUD routes for tasks
- External API route for advice
- Tested with Thunder Client

Dependencies:

Client:
- react
- react-dom
- react-router-dom
- axios
- bootstrap
- vite

Server:
- express
- nodemon
- cors
- axios
- mongoose
- concurrently

Additional Notes:
- All task data comes from MongoDB Atlas.
- No local JSON is used for task data in Deliverable 3.
- Thunder Client was used to test backend routes.
- External API feature is implemented through the backend and displayed on the frontend.
- MongoDB database name : studybuddyDB, collection: tasks.
MongoDB Setup:
----------------
The database is hosted on MongoDB Atlas.

To run this project:
1. Replace the MONGODB_URI in server/config/db.js with your own MongoDB connection string
2. Or create your own MongoDB Atlas cluster and update the connection string

A sample tasks.json file is included to populate the database.
