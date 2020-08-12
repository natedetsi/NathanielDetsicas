import React from 'react';
import Header from './header.jsx';
import HeaderCloudy from './headercloudy.jsx';
import HeaderSunny from './headerSunny.jsx';
import HeaderRaining from './headerRain.jsx';
import HeaderSnowing from './headersnow.jsx'; ////////////////////////   My code /////////////////////////////////

function HeaderLoadOut(props) {
  //convert
  var types = {
    weather: props.weather
  }; //check weather load weather

  if (types.weather == 'Clouds') {
    return /*#__PURE__*/React.createElement(HeaderCloudy, null);
  } else if (types.weather == 'Sunny') {
    return /*#__PURE__*/React.createElement(HeaderSunny, null);
  } else if (types.weather == 'Clear') {
    return /*#__PURE__*/React.createElement(HeaderSunny, null);
  } else if (types.weather == 'Rain') {
    return /*#__PURE__*/React.createElement(HeaderRaining, null);
  } else if (types.weather == 'Snow') {
    return /*#__PURE__*/React.createElement(HeaderRaining, null);
  } else {
    return /*#__PURE__*/React.createElement(Header, null);
  }

  console.log(types.weather);
} /////////////////////////// stack overflow recommendation///////////////////////
// object of weather types


var weatherTypes = {
  Clouds: /*#__PURE__*/React.createElement(HeaderCloudy, null),
  Sunny: /*#__PURE__*/React.createElement(HeaderSunny, null),
  Clear: /*#__PURE__*/React.createElement(HeaderSunny, null),
  Rain: /*#__PURE__*/React.createElement(HeaderRaining, null),
  Snow: /*#__PURE__*/React.createElement(HeaderSnowing, null)
}; //returns weather if it matchs with one of the onject pairs
//turnory operator
// function HeaderLoadOut(props){
//   const weather = props.weather;
//   return weather ? weatherTypes[weather] : <Header />; //must have a node to default to
// }

export default HeaderLoadOut;