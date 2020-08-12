import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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