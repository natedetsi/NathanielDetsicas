import React from "react";
import cloud from "../../images/cloud.png";
import plant from "../../images/plant.png";

function Header() {
  return /*#__PURE__*/React.createElement("div", {
    className: "top-container"
  }, /*#__PURE__*/React.createElement("img", {
    className: "top-cloud",
    src: cloud,
    alt: "cloud"
  }), /*#__PURE__*/React.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title-heading"
  }, "I'm Nathaniel Detsicas"), " ", /*#__PURE__*/React.createElement("h4", {
    className: "name"
  }, "(det-se-cas)"), /*#__PURE__*/React.createElement("h2", {
    className: " subtitle-1"
  }, "a ", /*#__PURE__*/React.createElement("span", null, " pro"), "grammer & designer")), /*#__PURE__*/React.createElement("img", {
    className: "plant",
    src: plant,
    alt: "plant"
  }), /*#__PURE__*/React.createElement("img", {
    className: "bottom-cloud",
    src: cloud,
    alt: "cloud"
  }));
}

export default Header;