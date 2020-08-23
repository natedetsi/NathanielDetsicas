import React from "react";
import man from "../../images/man.png";
import Intro from './intro.jsx';
import Skills from './skills.jsx';

function Bio() {
  return /*#__PURE__*/React.createElement("div", {
    className: "middle-container"
  }, /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Skills, null));
}

export default Bio;