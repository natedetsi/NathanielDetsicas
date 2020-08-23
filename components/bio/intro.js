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
  }, /*#__PURE__*/React.createElement("img", {
    className: "profile-image",
    src: man,
    alt: "profile"
  }), /*#__PURE__*/React.createElement("h2", null, "Hello."), /*#__PURE__*/React.createElement("p", null, "Welcome to my personal profile page, I am an up and coming software engineer. Currently studying a Bsc honors in Computing & IT (software) part time. I am passionate, self-motivated and hardworking. With a love for web developement and experience in modern langauages and frame works."))));
}

export default Intro;