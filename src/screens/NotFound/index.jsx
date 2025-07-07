// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import "./style.css";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";

import aboutbannerbg from "../../assets/images/servicesWebDesign-banner-bg.webp";

function NotFound() {
  return (
    <div className="notFOun-page">
      <DefaultLayout>
        <section className="main-banner">
          <div className="container">
            <div className="row justify-content-center">
              <h1>404 - Page Not Found</h1>
              <p>Oops! The page you're looking for doesn't exist.</p>
              <Link
                to="/"
                className="theme-btn theme-btn__yellow mt-3"
                style={{ maxWidth: "200px" }}
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </section>
        {/* <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container text-center py-5">
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-notFound mt-3">
            Go to Homepage
          </Link>
        </div>
      </div> */}
      </DefaultLayout>
    </div>
  );
}

export default NotFound;
