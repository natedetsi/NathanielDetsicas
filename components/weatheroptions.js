function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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