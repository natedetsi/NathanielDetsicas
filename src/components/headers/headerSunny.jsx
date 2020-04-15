import React from "react";
import "../../css/styles.css";
import "../../css/header.css";

import cloud from "../../images/sunnycloud.png";
import plant from "../../images/plant.png";
import sun from "../../images/sun.png";

function HeaderSunny() {

  return (
    <div className="top-container">
      <img className="top-cloud" src={cloud} alt="cloud"/>
      <img className="sun" src={sun} alt=""/>
      <div className="heading">
        <h1 className="title-heading">I'm Nathaniel Detsicas</h1>{" "}
        <h4 className="name">(det-se-cas)</h4>
        <h2 className=" subtitle-1">
          a <span> pro</span>grammer & designer
        </h2>
      </div>

      <img className="plant" src={plant} alt="plant" />

      <img className="bottom-cloud" src={cloud} alt="cloud" />
    </div>
  );
}

export default HeaderSunny;
