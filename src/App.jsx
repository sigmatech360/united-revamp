import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import "yet-another-react-lightbox/styles.css";

import { useEffect, useState } from "react";

import AppRouter from "./Router/AppRouter";
import { BsTelephone } from "react-icons/bs";
import FormModal from "./components/FormModal";
import PhoneLink from "./components/PhoneLink";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer />
      <div className="page-side-buttons">
        <button onClick={() => setShowModal(true)} className="theme-sideBtn">
          Get Free Consultations
        </button>
        {/* <a href="tel:+13214142155" className="pageSide__iconBtn">
            <BsTelephone />
          </a> */}
        <PhoneLink
          phoneNumber="+13214142155"
          className="pageSide__iconBtn"
          label={
            <>
              <BsTelephone />
            </>
          }
        />
      </div>

      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default App;
