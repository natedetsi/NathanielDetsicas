import React, {useState} from 'react';
import {useSpring, animated as a} from 'react-spring';
import '../css/styles.css';

function WeatherOption(){

      const [toggle, setToggle] = useState(false);

      const toggler = () => {

        console.log('clicked')
        setToggle(!toggle);
      }
      const open = useSpring({
        opacity: toggle ? '0' : '1',
        cursor: toggle ? 'default': 'pointer'
    });
  return(
    <div class="drop-down" onClick={toggler}>
      <a.div  className="options" style={open}>
        <div className="option" value="sunny"><a.p  style={open}>Sunny</a.p></div>
        <div className="option" value="clear"><a.a style={open}>Clear</a.a></div>
        <div className="option" value="cloudy"><a.a style={open}>Cloudy</a.a></div>
        <div className="option" value="snowing"><a.a style={open}>Snowing</a.a></div>
        <div className="option" value="raining"><a.a style={open}>Raining</a.a></div>
    </a.div>
  </div>
  )
}

export default WeatherOption;
