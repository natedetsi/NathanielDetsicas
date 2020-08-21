import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from "react";
import ReactGA from 'react-ga';
import { useSpring } from "react-spring";
import "./css/styles.css";
import "./css/projects.css"; // import WeatherOption from './components/weatheroptions.jsx'

import HeaderLoadOut from './components/headers/headerloadout.jsx';
import Bio from "./components/bio.jsx";
import Projects from "./components/projects.jsx";
import Contact from './components/contact.jsx'; // import Form from "./components/form";

import Footer from "./components/footer.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/scss/bootstrap.scss";
import axios from "axios";
export default function App() {
  // google analytics init
  // ReactGA.initialize('UA-174555150-1');
  // ReactGA.pageview('/homepage');
  //form show toggler
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  function showForm() {
    setToggle(!toggle);
  }

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1]; //show form spring


  var show = useSpring({
    height: toggle ? 425 : 0,
    opacity: toggle ? 1 : 0,
    config: {
      mass: 4,
      tension: 100,
      friction: 30
    }
  }); // locate the users and call loadWeather on resolve 

  function locate(error) {
    return new Promise(function (resolve) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        resolve(loadWeather(pos.coords.latitude, pos.coords.longitude));
      }, function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          console.log("Denied location access, enjoy some grey clouds :'(");
        }
      });
    });
  }

  ; //fetch weather from server and update page  

  function loadWeather(_x, _x2) {
    return _loadWeather.apply(this, arguments);
  }

  function _loadWeather() {
    _loadWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(lat, lon) {
      var result, data, weatherType;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("http://localhost:3000/weather/".concat(lat, ",").concat(lon));

            case 3:
              result = _context.sent;
              _context.next = 6;
              return result.json();

            case 6:
              data = _context.sent;
              _context.next = 9;
              return data.weather[0].main;

            case 9:
              weatherType = _context.sent;
              setType(weatherType);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));
    return _loadWeather.apply(this, arguments);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(HeaderLoadOut, {
    weather: "".concat(type)
  }), /*#__PURE__*/React.createElement(Bio, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Contact, {
    onClicked: showForm,
    style: show
  }), /*#__PURE__*/React.createElement(Footer, null));
}