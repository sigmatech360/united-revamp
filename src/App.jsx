import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import AppRouter from "./Router/AppRouter";
import { BsTelephone } from "react-icons/bs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 0,
    });
    AOS.refresh();
  }, []);

  return (
    <>
        <AppRouter />
        <div className="page-side-buttons">
          <button className="theme-sideBtn">
          Get Free Consultations
          </button>
          <a href="tel:6193266066" className="pageSide__iconBtn">
            <BsTelephone />
          </a>
        </div>
      
    </>
  );
}

export default App;
