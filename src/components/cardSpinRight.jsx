import React, {useState} from 'react';
import { useSpring, animated as a } from "react-spring";



function CardSpinRight(props){

    const [isToggledThree, setIsToggledThree] = useState(false);

    //third card
    const spinThree = useSpring({
      transform: isToggledThree ? "rotateY(180deg)" : "rotateY(0deg)",
      config: { mass: 3, tension: 150, friction: 18 }
    });
    const imgMoveThree = useSpring({
      transform: isToggledThree ? "rotateX(50deg)" : "rotate(0deg)",
      config: {mass: 3, tension: 150, friction: 18, delay: 100}
    });
    const dropThree = useSpring({
       transform:isToggledThree ? "translate(-50%, -50%)" : "translate(-500%, -50%)",
      config: {mass: 3, tension: 180, friction: 18}
    });
      // const [display, setDisplay] = useState(false);
      //
      // const slideIn = useSpring({left: display ? '50%': '-300%', config: {mass: 2, tension: 100, friction:30}})
      //
      // function open(){
      // setDisplay(!display);
      // }
  return(
                <div
                  className="card-box col-lg-4 col-md-6"
                  onMouseEnter={() => setIsToggledThree(!isToggledThree)}
                  onMouseLeave={() => setIsToggledThree(!isToggledThree)}
                >
                  <a.div className="card" style={spinThree}>
                    <div className="card-front">
                      <a.img
                        src={props.image}
                        alt="card-img-cap"
                        className="card-img-top"
                        style={imgMoveThree}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                          {props.paragraph}
                        </p>
                      </div>
                    </div>
                    <div className="card-back">
                  <a.button className="card-btn" name={props.name} onClick={props.onClick} style={dropThree}> Open </a.button>
                </div>
                  </a.div>
                </div>


  )

}

export default CardSpinRight;
