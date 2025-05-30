import React from "react";

import loaderGif from "../../assets/images/loader.gif";

const Loader = () => {
  return (
    <div className="loader-div">
      <img src={loaderGif} alt="" />
    </div>
  );
};

export default Loader;
