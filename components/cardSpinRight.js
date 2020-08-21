import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import { useSpring, animated as a } from "react-spring";

function CardSpinRight(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isToggledThree = _useState2[0],
      setIsToggledThree = _useState2[1]; //third card


  var spinThree = useSpring({
    transform: isToggledThree ? "rotateY(180deg)" : "rotateY(0deg)",
    config: {
      mass: 3,
      tension: 150,
      friction: 18
    }
  });
  var imgMoveThree = useSpring({
    transform: isToggledThree ? "rotateX(50deg)" : "rotate(0deg)",
    config: {
      mass: 3,
      tension: 150,
      friction: 18,
      delay: 100
    }
  });
  var dropThree = useSpring({
    transform: isToggledThree ? "translate(-50%, -50%)" : "translate(-500%, -50%)",
    config: {
      mass: 3,
      tension: 180,
      friction: 18
    }
  }); // const [display, setDisplay] = useState(false);
  //
  // const slideIn = useSpring({left: display ? '50%': '-300%', config: {mass: 2, tension: 100, friction:30}})
  //
  // function open(){
  // setDisplay(!display);
  // }

  return /*#__PURE__*/React.createElement("div", {
    className: "card-box ",
    onMouseEnter: function onMouseEnter() {
      return setIsToggledThree(!isToggledThree);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsToggledThree(!isToggledThree);
    }
  }, /*#__PURE__*/React.createElement(a.div, {
    className: "card",
    style: spinThree
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-front"
  }, /*#__PURE__*/React.createElement(a.img, {
    src: props.image,
    alt: "card-img-cap",
    className: "card-img-top",
    style: imgMoveThree
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title"
  }, props.title), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, props.paragraph))), /*#__PURE__*/React.createElement("div", {
    className: "card-back"
  }, /*#__PURE__*/React.createElement(a.button, {
    className: "card-btn",
    name: props.name,
    onClick: props.onClick,
    style: dropThree
  }, " Open "))));
}

export default CardSpinRight;