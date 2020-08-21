import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from "react";
import "../../css/styles.css";
import "../../css/header.css";
import { useTrail, animated as a } from "react-spring";

function Heading() {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var items = ["I'm", "Nathaniel", "Detsicas"];
  var trail = useTrail(items.length, {
    config: {
      mass: 5,
      tension: 2000,
      friction: 200
    },
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: {
      opacity: 0,
      marginLeft: -35
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title-heading"
  }, trail.map(function (_ref, index) {
    var x = _ref.x,
        height = _ref.height,
        rest = _objectWithoutProperties(_ref, ["x", "height"]);

    return /*#__PURE__*/React.createElement(a.span, {
      className: "title-span",
      key: items[index],
      style: {
        height: height
      }
    }, items[index]);
  })), /*#__PURE__*/React.createElement("h4", {
    className: "name"
  }, "(det-se-cas)"), /*#__PURE__*/React.createElement("h2", {
    className: " subtitle-1"
  }, "a ", /*#__PURE__*/React.createElement("span", null, " pro"), "grammer & designer"));
}

export default Heading;