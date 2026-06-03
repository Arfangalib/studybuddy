import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import AboutPage from "./pages/AboutPage";
import Whoops404 from "./pages/Whoops404";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/add" element={<AddTaskPage />} />
          <Route path="/tasks/edit/:id" element={<EditTaskPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Whoops404 />} />
        </Routes>
      </div>
    </>
  );
}