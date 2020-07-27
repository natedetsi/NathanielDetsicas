function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import CardSpinRight from './cardSpinRight.jsx';
import CardSpinLeft from './cardSpinLeft.jsx';
import notepadgif from '../video/notepad.gif';
import notepad from '../images/notepad.png';
import notemaker from '../images/NoteMaker.png';
import notemakergif from '../video/notemaker.gif';
import pokemongame from '../images/pokemongame.png';
import pokemongamegif from '../video/pokemongame.gif';
import Projection from './projection.jsx';
import '../css/projects.css';
import { useSpring } from "react-spring";

function Projects() {
  // set up function to get the event.target.name of each card and slideIn a card depending on that param
  //we need a function that calls from the card to the projection and slides in the projection
  //event.target.name if name === card one then slide in projection with the nmae of one.
  //toggle functions
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      display = _useState2[0],
      setDisplay = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      slide = _useState4[0],
      setSlide = _useState4[1]; //slide projection animation


  var slideIn = useSpring({
    left: display ? '50%' : '-300%',
    config: {
      mass: 2,
      tension: 100,
      friction: 30
    }
  }); //toggle state function, grabs event name toggles state and sets slide gif to the e.target.name

  function toggle(e) {
    var name = e.target.name;

    switch (name) {
      case 'notepad':
        setSlide(notepadgif);
        setDisplay(true);
        break;

      case 'pokemongame':
        setSlide(pokemongamegif);
        console.log('clicked');
        setDisplay(true);
        break;

      case 'notemaker':
        setSlide(notemakergif);
        setDisplay(true);
        break;

      default:
        setSlide();
        setDisplay(false);
        break;
    }
  }

  function close() {
    setDisplay(false);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "project-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(CardSpinLeft, {
    onClick: toggle,
    name: "notemaker",
    image: notemaker,
    title: 'Note Maker',
    paragraph: 'Vanilla javascript, note maker and tool box designed to run without a server. Built using electron.js'
  }), /*#__PURE__*/React.createElement(CardSpinRight, {
    onClick: toggle,
    image: pokemongame,
    name: "pokemongame",
    title: 'Pokemon Game',
    paragraph: "This is learning game to help kids read, listen and spell. Built with an OOP focus. Using API's to load the pokemon"
  }), /*#__PURE__*/React.createElement(CardSpinLeft, {
    onClick: toggle,
    name: "notepad",
    image: notepad,
    title: "NotePad App",
    paragraph: "  Fully functional NotePad app with get, post, delete requests to a mongo DB."
  })), /*#__PURE__*/React.createElement(Projection, {
    gif: "".concat(slide),
    style: slideIn,
    onClick: close
  }));
}

export default Projects;