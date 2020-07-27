function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    className: "card-box col-lg-4 col-md-6",
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