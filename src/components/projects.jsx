import React, { useState } from "react";
import CardSpinRight from './cardSpinRight.jsx';
import CardSpinLeft from './cardSpinLeft.jsx';
import notepadgif from '../video/notepad.gif';
import notepad from '../images/notepad.png'
import notemaker from '../images/NoteMaker.png';
import notemakergif from '../video/notemaker.gif';
import pokemongame from '../images/pokemongame.png';
import pokemongamegif from '../video/pokemongame.gif'
import Projection from './projection.jsx'
import '../css/projects.css'
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

          case 'pokemongame':
          setSlide(pokemongamegif);
          console.log('clicked')
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
        <CardSpinLeft 
         onClick={toggle}
         name="notemaker" 
         image={notemaker}
         title={'Note Maker'}
         paragraph={'Vanilla javascript, note maker and tool box designed to run without a server. Built using electron.js'}/>

        <CardSpinRight 
        onClick={toggle} 
        image={pokemongame} 
        name="pokemongame" 
        title={'Pokemon Game'} 
        paragraph={"This is learning game to help kids read, listen and spell. Built with an OOP focus. Using API's to load the pokemon"}/>

        <CardSpinLeft  
        onClick={toggle} 
        name="notepad" 
        image={notepad}
        title={"NotePad App"}
        paragraph={"  Fully functional NotePad app with get, post, delete requests to a mongo DB."}/>

        {/*<CardSpinRight image={notepad} title={'card four'} paragraph={'paragraph for card number four'}/>*/}
      </div>
      <Projection gif={`${slide}`} style={slideIn} onClick={close}/>

    </div>
  );
}

export default Projects;
