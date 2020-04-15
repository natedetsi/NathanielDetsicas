import React, { useState } from "react";
import CardSpinRight from './cardSpinRight';
import CardSpinLeft from './cardSpinLeft';
import notepadgif from '../video/notepad.gif';
import notepad from '../images/notepad.png'
import notemaker from '../images/NoteMaker.png';
import notemakergif from '../video/notemaker.gif';
import study from '../video/study.gif'
import studyTimer from '../images/study.png'
import Projection from './projection.jsx'

import { useSpring } from "react-spring";

function Projects() {

// set up function to get the event.target.name of each card and slideIn a card depending on that param
//we need a function that calls from the card to the projection and slides in the projection
//event.target.name if name === card one then slide in projection with the nmae of one.

  //toggle functions
   const [display, setDisplay] = useState(false);
   const [slide, setSlide] = useState();
   //slide projection animation
   const slideIn = useSpring({left: display ? '50%': '-300%', config: {mass: 2, tension: 100, friction:30}})
   //toggle state function, grabs event name toggles state and sets slide gif to the e.target.name
   function toggle(e){
     const name = e.target.name;

        switch(name){

          case 'notepad':
          setSlide(notepadgif);
          setDisplay(true);
          break;

          case 'study':
          setSlide(study);
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

function close(){
  setDisplay(false);
}
  return (
    <div className="project-container">
      <div className="row">
        <CardSpinLeft onClick={toggle} name="notemaker" image={notemaker} title={'Note Maker'} paragraph={'Vanilla javascript, note maker and tool box designed to run without a server, I made this as a way of speeding up processes in my department'}/>
        <CardSpinRight onClick={toggle} image={studyTimer} name="study" title={'Study Timer'} paragraph={'A React.js app I built to timer my studies and award stars for every hours of study'}/>
        <CardSpinLeft  onClick={toggle} name="notepad" image={notepad} title={"NotePad App"} paragraph={"  Fully functional NotePad app with get, post, delete requests to a mongo DB."}/>
        {/*<CardSpinRight image={notepad} title={'card four'} paragraph={'paragraph for card number four'}/>*/}
      </div>
      <Projection gif={`${slide}`} style={slideIn} onClick={close}/>

    </div>
  );
}

export default Projects;
