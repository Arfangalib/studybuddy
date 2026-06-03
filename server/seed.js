import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Task from "./models/Task.js";
import fs from "fs";

const seedTasks = async () => {
  await connectDB();

  await Task.deleteMany(); // optional

  const tasks = [];

  for (let i = 1; i <= 25; i++) {
    tasks.push({
      title: `Task ${i}`,
      course: "CSIS 3380",
      dueDate: `2026-04-${(i % 30) + 1}`,
      status: i % 2 === 0 ? "Done" : "Pending",
      priority: ["Low", "Medium", "High"][i % 3],
      description: `This is task number ${i}`
    });
  }

  //  Save to MongoDB
  await Task.insertMany(tasks);

  //  Export JSON file 
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));

  console.log(" 25 tasks inserted!");
  console.log(" tasks.json file created!");

  process.exit();
};

seedTasks();