import React from 'react';
import Header from './header.jsx';
import HeaderCloudy from './headercloudy.jsx';
import HeaderSunny from './headerSunny.jsx';
import HeaderRaining from './headerRain.jsx';
import HeaderSnowing from './headersnow.jsx'; ////////////////////////   My code /////////////////////////////////
// function HeaderLoadOut(props){
// //log weather from api by city
// console.log(props.weather);
// //convert
//   let types = {
//     weather: props.weather
//   }
// //check weather load weather
//
// if (types.weather == 'Clouds'){
//   return <HeaderCloudy />
// } else if (types.weather == 'Sunny'){
//   return <HeaderSunny />
// } else if (types.weather == 'Clear'){
//   return <HeaderSunny />
// } else if (types.weather == 'Rain'){
//   return <HeaderRaining />
// } else if (types.weather == 'Snow'){
//   return <HeaderRaining />
// } else {
//   return <Header />
// }
//
// console.log(types.weather)
//
//
// }
/////////////////////////// stack overflow recommendation///////////////////////
// object of weather types

var weatherTypes = {
  Clouds: /*#__PURE__*/React.createElement(HeaderCloudy, null),
  Sunny: /*#__PURE__*/React.createElement(HeaderSunny, null),
  Clear: /*#__PURE__*/React.createElement(HeaderSunny, null),
  Rain: /*#__PURE__*/React.createElement(HeaderRaining, null),
  Snow: /*#__PURE__*/React.createElement(HeaderSnowing, null)
}; //returns weather if it matchs with one of the onject pairs
//turnory operator

function HeaderLoadOut(props) {
  var weather = props.weather;
  return weather ? weatherTypes[weather] : /*#__PURE__*/React.createElement(Header, null); //must have a node to default to
}

export default HeaderLoadOut;