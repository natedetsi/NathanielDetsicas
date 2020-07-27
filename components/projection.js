import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { animated as a } from "react-spring";

function Projection(props) {
  return /*#__PURE__*/React.createElement(a.div, {
    style: props.style,
    className: "back-drop"
  }, /*#__PURE__*/React.createElement(a.img, {
    style: props.style,
    src: props.gif,
    className: "project-image",
    alt: "gif"
  }), /*#__PURE__*/React.createElement(CloseIcon, {
    className: "close-button",
    onClick: props.onClick
  }));
}

export default Projection;