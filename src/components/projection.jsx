import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { animated as a } from "react-spring";


function Projection(props) {

  return(
      <a.div style={props.style} className="back-drop">
      <a.img style={props.style} src={props.gif} className="project-image" alt="gif" />
      <CloseIcon className="close-button"onClick={props.onClick}/>
      </a.div>
  )
}

export default Projection;
