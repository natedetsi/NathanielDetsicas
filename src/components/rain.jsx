import React from 'react';
import '../css/header.css';




function Drop(props){

const position = {
  left: `${props.style.left}px`,
  top: `${props.style.top}px`
}
  
  return(
<p className="drop" style={position}></p>
  )
}

export default Drop;
