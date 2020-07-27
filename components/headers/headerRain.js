function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import "../../css/styles.css";
import "../../css/header.css";
import Drop from '.././rain.jsx';
import cloud from "../../images/raincloud.png";
import plant from "../../images/plant.png";

function HeaderRaining() {
  // rain maker function creates an arring of javascript objects
  // the object are then used to style the Rain component via props
  var _useState = useState([{
    left: '100',
    top: '100'
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      drops = _useState2[0],
      setDrops = _useState2[1]; //number of rain drops


  var nbDrop = 300; //random position of rain drops

  function randRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  } //create a rain drop for as long as i is less than number of drops


  function createRain() {
    var _loop = function _loop(i) {
      var leftpos = randRange(0, 1900);
      var toppos = randRange(-1000, 1400);
      var newDrop = {
        left: "".concat(leftpos),
        top: "".concat(toppos)
      }; //setDrops to previous Drops plus new Drop

      setDrops(function (prev) {
        return [].concat(_toConsumableArray(prev), [newDrop]);
      });
    };

    for (var i = 0; i < nbDrop; i++) {
      _loop(i);
    }

    ;
  } //below we map through the array of drops and render a Drop component for each drop


  return /*#__PURE__*/React.createElement("div", {
    className: "top-container",
    onLoad: createRain
  }, /*#__PURE__*/React.createElement("div", {
    className: "rain"
  }, /*#__PURE__*/React.createElement("img", {
    className: "top-cloud",
    src: cloud,
    alt: "cloud"
  }), drops.map(function (items, index) {
    return /*#__PURE__*/React.createElement(Drop, {
      key: index,
      style: drops[index]
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title-heading"
  }, "I'm Nathaniel Detsicas"), " ", /*#__PURE__*/React.createElement("h4", {
    className: "name"
  }, "(det-se-cas)"), /*#__PURE__*/React.createElement("h2", {
    className: " subtitle-1"
  }, "a ", /*#__PURE__*/React.createElement("span", null, " pro"), "grammer & designer")), /*#__PURE__*/React.createElement("img", {
    className: "plant",
    src: plant,
    alt: "plant"
  }), /*#__PURE__*/React.createElement("img", {
    className: "bottom-cloud",
    src: cloud,
    alt: "cloud"
  })));
}

export default HeaderRaining;