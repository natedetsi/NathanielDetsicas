import React, {useState} from "react";
import { useSpring } from "react-spring";
import "./css/styles.css";
import WeatherOption from './components/weatheroptions.jsx'
import HeaderLoadOut from './components/headers/headerloadout'
import Bio from "./components/bio";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Form from "./components/form";
import Footer from "./components/footer";
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
  // lacation vaiables
  let lat;
  let long;
  let geo = navigator.geolocation;
  let loc = geo.getCurrentPosition(success);
//location state
const [location, setLocation] = useState({
  lat: '',
  long: ''
});
//get locaion of user and setLocation state
  function success(pos){
     lat = pos.coords.latitude;
     long = pos.coords.longitude;
     setLocation({lat: lat, long: long});
  };

console.log(location.long);
//load weather api with user location
//selection function working progress..
function loadWeather(){
axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + location.lat + '&lon=' + location.long + '&APPID=58b2dc700c311dc479a633c676f88d95')
  .then(res => {
    const weatherType = () => {

         return res.data.weather[0].main;

    };
    setType(weatherType);})
};
//prevents function running more than once
  let weatherKiller = true;
function weather(){

  if(weatherKiller === true){
    loadWeather();
    weatherKiller = false;
  }

}


  return (
    <div className="App" onLoad={weather}>
      <HeaderLoadOut weather={`${type}`}/>
      <Bio />
      <Projects />
      <Contact onClicked={showForm} style={show}/>
      <Footer />
    </div>
  );
}
