import React from 'react';
import '../../css/header.css';



function SnowFlake(props){


  const position = {
    left: `${props.style.left}px`,
    top: `${props.style.top}px`
  }

  return (
    <div className="snow-flake" style={position}></div>
  )
}

export default SnowFlake;
