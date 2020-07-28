function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
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
  }); //locate the users and call loadWeather on resolve 

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

  ;
  console.log(process.env.REACT_APP_WEATHER); //load weather api with user location
  //selection function working progress..

  function loadWeather(lat, long) {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + "&APPID=".concat(process.env.REACT_APP_WEATHER)).then(function (res) {
      var weatherType = function weatherType() {
        return res.data.weather[0].main;
      };

      setType(weatherType);
    });
  }

  ; // remove onLoad={locate}

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(HeaderLoadOut, {
    weather: "".concat(type)
  }), /*#__PURE__*/React.createElement(Bio, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Contact, {
    onClicked: showForm,
    style: show
  }), /*#__PURE__*/React.createElement(Footer, null));
}