function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect } from "react";
import "../../css/styles.css";
import "../../css/header.css";
import Cloud from '.././cloud.jsx'; //import cloud from "../../images/cloudreal.png";

import plant from "../../images/plant.png";

function HeaderCloudy() {
  var clouds = useState([]); // number range generator

  function numGen(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }

  for (var i = 0; i < 100; i++) {
    clouds.push('newCloud');
  } //window width useState


  var _useState = useState(window.innerWidth),
      _useState2 = _slicedToArray(_useState, 2),
      winWidth = _useState2[0],
      setwinWidth = _useState2[1]; //window width get function
  //set min width


  var minHgt = 400; //useEffect calls listener function gets window innerwidth setwinWidth
  //adds event listener for resizing
  //removes event listener

  useEffect(function () {
    var listener = function listener() {
      setwinWidth(window.innerWidth);
    };

    window.addEventListener("resize", listener);
    return function () {
      window.removeEventListener("resize", listener);
    };
  }, []); //
  // function cloudsMover(){
  //  for(let i = 0; i < 5; i++){
  //     setwinWidth(window.innderWidth - 1);
  //     }
  //   }
  //

  return /*#__PURE__*/React.createElement("div", {
    className: "top-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title-heading"
  }, "I'm Nathaniel Detsicas"), " ", /*#__PURE__*/React.createElement("h4", {
    className: "name"
  }, "(det-se-cas)"), /*#__PURE__*/React.createElement("h2", {
    className: " subtitle-1"
  }, "a ", /*#__PURE__*/React.createElement("span", null, " pro"), "grammer & designer")), clouds.map(function (item) {
    return /*#__PURE__*/React.createElement(Cloud, {
      left: "".concat(numGen(-50, 1900)),
      top: "".concat(numGen(-100, 150)),
      height: "".concat(numGen(100, 300)),
      width: "".concat(numGen(500, 800))
    });
  }), /*#__PURE__*/React.createElement("img", {
    className: "plant",
    src: plant,
    alt: "plant"
  }));
}

export default HeaderCloudy;