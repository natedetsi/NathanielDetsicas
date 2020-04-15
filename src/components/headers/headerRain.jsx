import React, {useState}from "react";
import "../../css/styles.css";
import "../../css/header.css";
import Drop from '.././rain.jsx'
import cloud from "../../images/raincloud.png";
import plant from "../../images/plant.png";

function HeaderRaining() {

// rain maker function creates an arring of javascript objects
// the object are then used to style the Rain component via props
  const [drops, setDrops] = useState([{left: '100', top: '100'}]);
//number of rain drops
      const nbDrop = 300;
      //random position of rain drops
      function randRange(minNum, maxNum){
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
      }
      //create a rain drop for as long as i is less than number of drops
        function createRain(){
          for(let i = 0; i < nbDrop; i++){
            let leftpos = randRange(0, 1900);
            let toppos = randRange(-1000, 1400);
            let newDrop = {left: `${leftpos}`, top: `${toppos}`}
            //setDrops to previous Drops plus new Drop
            setDrops(  prev => {
              return[...prev, newDrop]
            });
          };
        }
    //below we map through the array of drops and render a Drop component for each drop
  return (
    <div className="top-container" onLoad={createRain}>
      <div className="rain">
      <img className="top-cloud" src={cloud} alt="cloud"/>
      {drops.map((items, index) => (<Drop key={index} style={drops[index]} />))}
      <div className="heading">
        <h1 className="title-heading">I'm Nathaniel Detsicas</h1>{" "}
        <h4 className="name">(det-se-cas)</h4>
        <h2 className=" subtitle-1">
          a <span> pro</span>grammer & designer
        </h2>
      </div>

      <img className="plant" src={plant} alt="plant" />

      <img className="bottom-cloud" src={cloud} alt="cloud" />
    </div>
    </div>
  );
}

export default HeaderRaining;
