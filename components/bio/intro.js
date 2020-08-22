import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import { useSpring, animated as a } from "react-spring";
import man from "../../images/man.png";
import { set } from 'react-ga';

function Intro() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      on = _useState2[0],
      set = _useState2[1];

  var props = useSpring({
    opacity: on ? 1 : 0
  });

  var change = function change(e) {
    var elem = e.target;

    if (elem.scrollHeight - elem.scrollTop === elem.clientHeight) {
      set(!on);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "profile",
    onScroll: change
  }, /*#__PURE__*/React.createElement("button", {
    onClick: change
  }, "button"), /*#__PURE__*/React.createElement(a.div, {
    className: "bio",
    style: props
  }, /*#__PURE__*/React.createElement("img", {
    className: "profile-image",
    src: man,
    alt: "profile"
  }), /*#__PURE__*/React.createElement("h2", null, "Hello."), /*#__PURE__*/React.createElement("p", null, "Welcome to my personal profile page, I am an up and coming software engineer. Currently studying a Bsc honors in Computing & IT (software) part time. I am passionate, self-motivated and hardworking. With a love for web developement and experience in modern langauages and frame works.")));
}

export default Intro;