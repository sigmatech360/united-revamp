import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

import AppRouter from "./Router/AppRouter";
import { BsTelephone } from "react-icons/bs";
import FormModal from "./components/FormModal";

function App() {
  const [showModal, setShowModal] = useState(false);
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
          <button onClick={() => setShowModal(true)} className="theme-sideBtn">
          Get Free Consultations
          </button>
          <a href="tel:+18324769672" className="pageSide__iconBtn" aria-label="Get Free Consultations">
            <BsTelephone />
          </a>
        </div>

<FormModal show={showModal} handleClose={() => setShowModal(false)} />
      
    </>
  );
}

export default App;
