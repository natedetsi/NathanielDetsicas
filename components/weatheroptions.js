import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import '../css/styles.css';

function WeatherOption() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var toggler = function toggler() {
    console.log('clicked');
    setToggle(!toggle);
  };

  var open = useSpring({
    opacity: toggle ? '0' : '1',
    cursor: toggle ? 'default' : 'pointer'
  });
  return /*#__PURE__*/React.createElement("div", {
    class: "drop-down",
    onClick: toggler
  }, /*#__PURE__*/React.createElement(a.div, {
    className: "options",
    style: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "option",
    value: "sunny"
  }, /*#__PURE__*/React.createElement(a.p, {
    style: open
  }, "Sunny")), /*#__PURE__*/React.createElement("div", {
    className: "option",
    value: "clear"
  }, /*#__PURE__*/React.createElement(a.a, {
    style: open
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    className: "option",
    value: "cloudy"
  }, /*#__PURE__*/React.createElement(a.a, {
    style: open
  }, "Cloudy")), /*#__PURE__*/React.createElement("div", {
    className: "option",
    value: "snowing"
  }, /*#__PURE__*/React.createElement(a.a, {
    style: open
  }, "Snowing")), /*#__PURE__*/React.createElement("div", {
    className: "option",
    value: "raining"
  }, /*#__PURE__*/React.createElement(a.a, {
    style: open
  }, "Raining"))));
}

export default WeatherOption;