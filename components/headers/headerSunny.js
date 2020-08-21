import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from "react";
import "../../css/styles.css";
import "../../css/header.css";
import { useSpring, animated as a } from "react-spring";
import Heading from './heading.jsx';
import cloud from "../../images/sunnycloud.png";
import plant from "../../images/plant.png";
import sun from "../../images/sun.png";

function HeaderSunny() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      load = _useState2[0],
      setLoad = _useState2[1];

  var drop = useSpring({
    top: load ? '20%' : '-100%',
    config: {
      mass: 2,
      tension: 250,
      friction: 50
    }
  });
  var drop1 = useSpring({
    left: load ? '10%' : '-100%',
    config: {
      mass: 12,
      tension: 100,
      friction: 50
    }
  });
  var drop2 = useSpring({
    top: load ? '35%' : '-100%',
    config: {
      mass: 2,
      tension: 100,
      friction: 20
    }
  });

  var toggle = function toggle() {
    setTimeout(function () {
      setLoad(!load);
      console.log('clicked');
    }, 500);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "top-container",
    onLoad: toggle
  }, /*#__PURE__*/React.createElement(a.img, {
    className: "top-cloud",
    src: cloud,
    alt: "cloud",
    style: drop
  }), /*#__PURE__*/React.createElement(a.img, {
    className: "sun",
    src: sun,
    alt: "",
    style: drop1
  }), /*#__PURE__*/React.createElement(Heading, null), /*#__PURE__*/React.createElement("img", {
    className: "plant",
    src: plant,
    alt: "plant"
  }), /*#__PURE__*/React.createElement(a.img, {
    className: "bottom-cloud",
    src: cloud,
    alt: "cloud",
    style: drop2
  }));
}

export default HeaderSunny;