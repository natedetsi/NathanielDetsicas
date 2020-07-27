import React from 'react';
import '../../css/header.css';

function SnowFlake(props) {
  var position = {
    left: "".concat(props.style.left, "px"),
    top: "".concat(props.style.top, "px")
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "snow-flake",
    style: position
  });
}

export default SnowFlake;