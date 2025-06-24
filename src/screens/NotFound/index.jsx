// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
        <div className="container text-center py-5">
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary mt-3">Go to Homepage</Link>
        </div>
    </div>
  );
}

export default NotFound;
