import React, {useState} from "react";
import { useSpring } from "react-spring";
import "./css/styles.css";
import "./css/projects.css";
// import WeatherOption from './components/weatheroptions.jsx'
import HeaderLoadOut from './components/headers/headerloadout.jsx'
import Bio from "./components/bio.jsx";
import Projects from "./components/projects.jsx";
import Contact from './components/contact.jsx';
// import Form from "./components/form";
import Footer from "./components/footer.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/scss/bootstrap.scss";
import axios from "axios";


export default function App() {

  //form show toggler
  const [toggle, setToggle] = useState(false);
  function showForm() {
    setToggle(!toggle);
    
  }
  const [type, setType] = useState([]);





//show form spring
  const show = useSpring({
    height: toggle ? 425 : 0,
    opacity: toggle ? 1 : 0,
    config: { mass: 4, tension: 100, friction: 30 }
  });
 
//locate the users and call loadWeather on resolve 
  function locate(error) {
    return new Promise(function (resolve) {

        navigator.geolocation.getCurrentPosition(function(pos){
          resolve(loadWeather(pos.coords.latitude, pos.coords.longitude));
        },
          function(error) {
            if (error.code === error.PERMISSION_DENIED ) {
              console.log("Denied location access, enjoy some grey clouds :'(")
            }
          }
        )
      
     })
  };


//load weather api with user location
//selection function working progress..
function loadWeather(lat, long){
axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + `&APPID=58b2dc700c311dc479a633c676f88d95`)
  .then(res => {
    const weatherType = () => {
         return res.data.weather[0].main;
    };
    setType(weatherType);})
};

  return (
    <div className="App" onLoad={locate}>
      <HeaderLoadOut weather={`${type}`}/>
      <Bio />
      <Projects />
      <Contact onClicked={showForm} style={show}/>
      <Footer />
    </div>
  );
}

