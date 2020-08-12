import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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
  //random position of rain drops


  function randRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  } //create a rain drop for as long as i is less than number of drops


  function createRain() {
    var nbDrop = 200;

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