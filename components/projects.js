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
import { useSpring } from "react-spring"; /// Need to change the cards to an array of cards, with ID's that are loaded via the id 
//so that whehn they are hovered over the arry can be filltered by the id in order to load 
//only that card allowing me to add the width adjustme￼t 

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
      setSlide = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1]; //slide projection animation


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
        null;
        break;
    }
  }

  function close() {
    setDisplay(false);
  }

  var cards = [{
    key: "0",
    img: "".concat(notemaker),
    title: "Note Maker",
    content: "Vanilla javascript, note maker and tool box designed to run without a server. Built using electron.js"
  }, {
    key: "1",
    img: "".concat(pokemongame),
    title: "Pokemon Game",
    content: "This is learning game to help kids read, listen and spell. Built with an OOP focus. Using API's to load the pokemon"
  }, {
    key: "2",
    img: "".concat(notepad),
    title: "Notepad App",
    content: "Fully functional NotePad app with get, post, delete requests to a mongo DB."
  }]; //  let tempCards = [];
  // document.querySelectorAll('.card-box').forEach(elem => {
  //   elem.addEventListener('mouseenter',(e) => {
  //     document.querySelectorAll('.card-box').forEach(elem => {
  //       if (elem != e.target) {
  //         tempCards = cards.filter(item => item === e.target);
  //         setShow(!show)
  //         elem.style.opacity = "0";
  //         elem.style.display = "block";
  //      }
  //     })
  //     })
  //   })
  // document.querySelectorAll('.card-box').forEach(elem => {
  //   elem.addEventListener('mouseleave',(e) => {
  //     document.querySelectorAll('.card-box').forEach(elem => {
  //       if (elem != e.target) {
  //          elem.style.opacity = "1";
  //          elem.style.display = "inherit";
  //       }
  //     })
  //   })
  // })

  return /*#__PURE__*/React.createElement("div", {
    className: "project-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, show ? cards.map(function (item) {
    return /*#__PURE__*/React.createElement(CardSpinLeft, {
      onClick: toggle,
      key: item.key,
      id: item.key,
      image: item.img,
      name: item.title,
      title: item.title,
      paragraph: item.content
    });
  }) : /*#__PURE__*/React.createElement(CardSpinLeft, {
    onClick: toggle,
    key: tempCards.key,
    id: tempCards.key,
    image: tempCards.img,
    name: tempCards.title,
    title: tempCards.title,
    paragraph: tempCards.content
  })), /*#__PURE__*/React.createElement(Projection, {
    gif: "".concat(slide),
    style: slideIn,
    onClick: close
  }));
}

export default Projects;