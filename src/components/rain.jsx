import React from 'react';
import '../css/header.css';




function Drop(props){

const position = {
  left: `${props.style.left}px`,
  top: `${props.style.top}px`
}
  // const position = useSpring({left: `${drops.left}`}, {top: `${drops.left}`})
  return(
<div className="drop" style={position}></div>
  )
}

export default Drop;
