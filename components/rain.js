import React from 'react';
import '../css/header.css';

function Drop(props) {
  var position = {
    left: "".concat(props.style.left, "px"),
    top: "".concat(props.style.top, "px")
  }; // const position = useSpring({left: `${drops.left}`}, {top: `${drops.left}`})

  return /*#__PURE__*/React.createElement("div", {
    className: "drop",
    style: position
  });
}

export default Drop;