import { Link, useLocation } from "react-router-dom";

export default function Whoops404() {
  const location = useLocation();

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h1 className="h3 text-danger">404 - Page Not Found</h1>
        <p>
          The page <strong>{location.pathname}</strong> does not exist.
        </p>
        <Link className="btn btn-primary" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}