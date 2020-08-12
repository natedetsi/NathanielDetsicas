import React from 'react';
import Header from './header.jsx'
import HeaderCloudy from './headercloudy.jsx'
import HeaderSunny from './headerSunny.jsx'
import HeaderRaining from './headerRain.jsx'
import HeaderSnowing from './headersnow.jsx'
////////////////////////   My code /////////////////////////////////
function HeaderLoadOut(props){

//convert
  let types = {
    weather: props.weather
  }
//check weather load weather

if (types.weather == 'Clouds'){
  return <HeaderCloudy />
} else if (types.weather == 'Sunny'){
  return <HeaderSunny />
} else if (types.weather == 'Clear'){
  return <HeaderSunny />
} else if (types.weather == 'Rain'){
  return <HeaderRaining />
} else if (types.weather == 'Snow'){
  return <HeaderRaining />
} else {
  return <Header />
}

console.log(types.weather)


}
/////////////////////////// stack overflow recommendation///////////////////////
// object of weather types
const weatherTypes = {
  Clouds: <HeaderCloudy />,
  Sunny: <HeaderSunny />,
  Clear: <HeaderSunny />,
  Rain: <HeaderRaining />,
  Snow: <HeaderSnowing />
}

//returns weather if it matchs with one of the onject pairs
//turnory operator
// function HeaderLoadOut(props){
//   const weather = props.weather;
//   return weather ? weatherTypes[weather] : <Header />; //must have a node to default to
// }
export default HeaderLoadOut;
