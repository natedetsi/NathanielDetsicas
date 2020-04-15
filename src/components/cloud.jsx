import React from 'react';
import cloud from '../images/cloudreal.png'


function Cloud(props){

const cloudStyle = {
  height: `${props.height}px`,
  width: `${props.width}px`,
  left: `${props.left}%`,
  top: `${props.top}px`,
}


  return (
    <img className="cloud" style={cloudStyle} src={cloud}  alt="cloud"/>
  )
}
export default Cloud;
