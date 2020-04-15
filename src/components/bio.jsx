import React from "react";
import man from "../images/man.png";

function Bio() {
  return (
    <div className="middle-container">
      <div className="profile">
        <div className="bio">
          <img className="profile-image" src={man} alt="profile" />
          <h2>Hello.</h2>
          <p>
            Welcome to my personal profile page, I am an up and coming software
            engineer. Currently studying a Hsc honors in Computing & IT
            (software). I am passionate, self-motivated and hardworking.
          </p>
        </div>
      </div>
      <hr />
      <div className="skills">
        <div className="container">
          <div className="row">
            <div className="skill-card col-lg-6 col-lg-offset-4">
              <h3>Front-end Web Design</h3>
              <p>
                Skills in front-end web design, with a focus on user expience.
              </p>
            </div>
            <div className="skill-card col-lg-6 col-lg-offset-4">
              <h3>Software Development</h3>
              <p>Full stack development, using the MERN stack.</p>
            </div>
            <div className="skill-card col-lg-6 col-lg-offset-4">
              <h3>Responsive design</h3>
              <p>Responsive desgins, to suit all devices</p>
            </div>
            <div className="skill-card col-lg-6 col-lg-offset-4">
              <h3>Animations</h3>
              <p>
                Custom built animations, for a fresh and clean look grabbing the
                users attention
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
