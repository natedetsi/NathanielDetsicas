import React from "react";
import cloud from "../../images/cloud.png";
import plant from "../../images/plant.png";

function Header() {
  return (
    <div className="top-container">
      <img className="top-cloud" src={cloud} alt="cloud" />
      <div className="heading">
        <h1 className="title-heading">I'm Nathaniel Detsicas</h1>{" "}
        <h4 className="name">(det-se-cas)</h4>
        <h2 className=" subtitle-1">
          a <span> pro</span>grammer & designer
        </h2>
      </div>

      <img class="plant" src={plant} alt="plant" />

      <img class="bottom-cloud" src={cloud} alt="cloud" />
    </div>
  );
}

export default Header;
