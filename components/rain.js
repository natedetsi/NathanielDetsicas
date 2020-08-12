import React from 'react';
import '../css/header.css';

function Drop(props) {
  var position = {
    left: "".concat(props.style.left, "px"),
    top: "".concat(props.style.top, "px")
  };
  return /*#__PURE__*/React.createElement("p", {
    className: "drop",
    style: position
  });
}

export default Drop;