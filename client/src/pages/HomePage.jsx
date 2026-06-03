import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdvice } from "../services/adviceService";

export default function HomePage() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");

  async function loadAdvice() {
    try {
      const data = await getAdvice();
      setAdvice(data.advice);
      setError("");
    } catch {
      setError("Failed to load advice");
    }
  }

  useEffect(() => {
    let ignore = false;

    getAdvice()
      .then((data) => {
        if (!ignore) {
          setAdvice(data.advice);
          setError("");
        }
      })
      .catch(() => {
        if (!ignore) {
          setError("Failed to load advice");
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="row g-3">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-body">
            <h1 className="h3 mb-3">Welcome to StudyBuddy</h1>
            <p className="text-muted">
              A full-stack task tracker built with React, Express, MongoDB, and an
              external API.
            </p>

            <Link className="btn btn-primary" to="/tasks">
              Go to Tasks
            </Link>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="h5 mb-3">Daily Advice / Motivation</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            {!error && (
              <>
                <p className="mb-3">{advice || "Loading advice..."}</p>
                <button className="btn btn-outline-primary" onClick={loadAdvice}>
                  Refresh Advice
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
