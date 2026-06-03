import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService";

export default function AddTaskPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    course: "",
    dueDate: "",
    status: "Pending",
    priority: "Medium",
    description: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createTask(form);
      navigate("/tasks");
    } catch {
      setError("Failed to add task");
    }
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h1 className="h3 mb-3">Add Task</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>
            <input
              className="form-control"
              name="course"
              value={form.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Due Date</label>
            <input
              className="form-control"
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="btn btn-primary">Save Task</button>
        </form>
      </div>
    </div>
  );
}
