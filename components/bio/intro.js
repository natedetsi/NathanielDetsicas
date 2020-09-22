import React, { useState } from 'react';
import Slide from 'react-reveal/Fade';
import man from "../../images/man.png";

function Intro() {
  return /*#__PURE__*/React.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/React.createElement(Slide, {
    right: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, /*#__PURE__*/React.createElement("h4", null, "Welcome To My Portfolio")), /*#__PURE__*/React.createElement("div", {
    className: "bio-paragraph"
  }, /*#__PURE__*/React.createElement("img", {
    className: "profile-image",
    src: man,
    alt: "profile"
  }), /*#__PURE__*/React.createElement("p", null, "As a developer, I am passionate about my work I strive to constantly learn and develop. A creative eye for front end web development creating clean page transitions dynamic loading and a high quality user experience. Driven by a challenge I have developed great problem solving skills.")))));
}

export default Intro;