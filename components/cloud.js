import React from 'react';
import cloud from '../images/cloudreal.png';

function Cloud(props) {
  var cloudStyle = {
    height: "".concat(props.height, "px"),
    width: "".concat(props.width, "px"),
    left: "".concat(props.left, "%"),
    top: "".concat(props.top, "px")
  };
  return /*#__PURE__*/React.createElement("img", {
    className: "cloud",
    style: cloudStyle,
    src: cloud,
    alt: "cloud"
  });
}

export default Cloud;