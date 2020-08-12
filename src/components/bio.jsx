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
            engineer. Currently studying a Bsc honors in Computing & IT
            (software) part time. I am passionate, self-motivated and hardworking. With a love for 
            web developement and experience in modern langauages and frame works.
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
                Skilled front-end web designer, with a focus on user experience. Responsive layouts and 
                attention grabbing design.
              </p>
            </div>
            <div className="skill-card col-lg-6 col-lg-offset-4">
              <h3>Software Development</h3>
              <p>Full stack development, using the MERN stack I have built applications from notepads, to web based applications.
                With experience using electron for desktop based applications.
              </p>
            </div>
            <div className="skill-card col-lg-6 col-lg-offset-4">
              <h3>Problem solving</h3>
              <p>I am someone who hates inefficiency, but takes a solution based approach. Aiming for fast, simple and maintainable fixes to problems.</p>
            </div>
            <div className="skill-card col-lg-6 col-lg-offset-4">
              <h3>Animations</h3>
              <p>
                Custom built animations, transitions for a sharp look and smooth operation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
