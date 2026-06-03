import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTask, getAllTasks } from "../services/taskService";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  async function loadTasks() {
    try {
      const data = await getAllTasks();
      setTasks(data);
      setError("");
    } catch {
      setError("Failed to load tasks");
    }
  }

  useEffect(() => {
    let ignore = false;

    getAllTasks()
      .then((data) => {
        if (!ignore) {
          setTasks(data);
          setError("");
        }
      })
      .catch(() => {
        if (!ignore) {
          setError("Failed to load tasks");
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      loadTasks();
    } catch {
      setError("Failed to delete task");
    }
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="h3 mb-0">All Tasks</h1>
          <Link className="btn btn-primary" to="/tasks/add">
            Add Task
          </Link>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        {tasks.length === 0 ? (
          <p className="text-muted">No tasks found.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Course</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.course}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.status}</td>
                    <td>{task.priority}</td>
                    <td>{task.description}</td>
                    <td>
                      <Link
                        className="btn btn-sm btn-outline-primary me-2"
                        to={`/tasks/edit/${task._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(task._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
