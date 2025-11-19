  import React from "react";

  const FourDetailBox = (props) => {
    return (
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="whatwodo-box">
            <h3>{props.countone}</h3>
            <p>{props.headone}</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="whatwodo-box">
            <h3>{props.counttwo}</h3>
            <p>{props.headtwo}</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="whatwodo-box">
            <h3>{props.countthree}</h3>
            <p>{props.headthree}</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="whatwodo-box">
            <h3>{props.countfour}</h3>
            <p>{props.headfour}</p>
          </div>
        </div>
      </div>
    );
  };

  export default FourDetailBox;
