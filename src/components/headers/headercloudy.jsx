import React, {useState, useEffect} from "react";
import "../../css/styles.css";
import "../../css/header.css";
import Cloud from '.././cloud.jsx';
//import cloud from "../../images/cloudreal.png";
import plant from "../../images/plant.png";

function HeaderCloudy() {
  const clouds = useState([]);
  // number range generator
  function numGen(minNum, maxNum){
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }
  for(let i = 0; i < 100; i++){
    clouds.push('newCloud');
  }
  //window width useState
  const [winWidth, setwinWidth] = useState(window.innerWidth);
  //window width get function

//set min width
    const minHgt = 400;
//useEffect calls listener function gets window innerwidth setwinWidth
//adds event listener for resizing
//removes event listener
    useEffect(() => {
        const listener = () => {
            setwinWidth(window.innerWidth);
        }
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);
//
// function cloudsMover(){
//  for(let i = 0; i < 5; i++){
//     setwinWidth(window.innderWidth - 1);
//     }
//   }
//

  return (
    <div className="top-container" >
      <div className="heading">
        <h1 className="title-heading">I'm Nathaniel Detsicas</h1>{" "}
        <h4 className="name">(det-se-cas)</h4>
        <h2 className=" subtitle-1">
          a <span> pro</span>grammer & designer
        </h2>
      </div>
      {clouds.map(item => ((<Cloud  left={`${numGen(-50, 1900)}`} top={`${numGen(-100, 150)}`} height={`${numGen(100, 300)}`} width={`${numGen(500, 800)}`}/>)))}
      <img className="plant" src={plant} alt="plant" />
    </div>
  );
}

export default HeaderCloudy;
