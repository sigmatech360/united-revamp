import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import "./style.css";
import ListItem from "../ListItem";
import FormModal from "../../components/FormModal";

const PackagesCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  // console.log("props.packagesData", props.packagesData);
  // console.log("props.list", props.list);
  return (
    <>
    <div className="packageCard">
      <div className="packageCardHeader">
        <p className="packageName">{props?.name}</p>
        <div className="packagePriceDiv">
          <h3 className="packagePrice">{props?.price}</h3>
          {props?.duration && <span>/</span>}
          {props?.duration && <p>{props?.duration}</p>}
          {/* <p>Month</p> */}
        </div>
      </div>
      <div className="packageCardBody">
        {/* <p className="packageCardBody-title h5">What's Include</p>
        <ListItem list={props.list} /> */}

        {Array.isArray(props.packagesData) &&
          props.packagesData.map((item, index) => (
            <div className="packageCardBodyList" key={index}>
              {item.heading && (
                <p className="packageCardBody-title h5">{item.heading}</p>
              )}
              <ListItem list={item.items} />
            </div>
          ))}

        <button
          className="theme-btn icon-btn"
           onClick={() => setShowModal(true)}
        >
          Get Started <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
     <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default PackagesCard;
