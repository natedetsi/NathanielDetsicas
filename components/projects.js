import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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