export default function AboutPage() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h1 className="h3 mb-3">About</h1>
        <p>This project includes:</p>
        <ul className="mb-0">
          <li>React Router for page navigation</li>
          <li>Bootstrap styling</li>
          <li>Node + Express backend</li>
          <li>MongoDB Atlas + Mongoose</li>
          <li>Full CRUD operations</li>
          <li>External API integration for advice/motivation</li>
          <li>Axios communication between client and server</li>
        </ul>
      </div>
    </div>
  );
}
