import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import adviceRoutes from "./routes/adviceRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("StudyBuddy Deliverable 3 server is running");
});

app.use("/api/tasks", taskRoutes);
app.use("/api/advice", adviceRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`The server is up and running on port ${PORT}`);
  });
};

startServer();
