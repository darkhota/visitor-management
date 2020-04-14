import React from "react";
import "loaders.css/loaders.css";
import "spinkit/css/spinkit.css";
// See more loading icons here:
// https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons
const PageLoader = () => (
  <div className="page-loader">
    <em className="ball-scale-ripple-multiple">
      <div></div>
      <div></div>
      <div></div>
    </em>
  </div>
);

export default PageLoader;
