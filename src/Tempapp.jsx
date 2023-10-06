import React from "react";
import "./App.css";
import Navbar from "./navbar";

const Tempapp = () => {
  return (
    <>
      <div>
        <div className="div1">
          <Navbar />
          <div className="textinsite">
            <h2>UPCOMING LAUNCHES</h2>
            <h1>STARLINK MISSION</h1>
            <div>
              <a href="https://www.spacex.com/launches/mission/?missionId=sl-6-21">
                <button className="LearnMore">LEARN MORE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="div2">
          <div className="textinsite">
            <h2>RECENT LAUNCH</h2>
            <h1>STARLINK MISSION</h1>
            <div>
              <a href="https://www.spacex.com/launches/mission/?missionId=sl-6-19">
                <button className="LearnMore">LEARN MORE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="div3">
          <div className="textinsite">
            <h2>COMPLETED MISSION</h2>
            <h1>DRAGON AND CREW-6 RETURN TO EARTH</h1>
            <div>
              <a href="https://www.spacex.com/launches/mission/?missionId=crew-6-return">
                <button className="LearnMore">LEARN MORE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="div4">
          <div className="textinsite">
            <h1>STARSHIP FLIGHT TEST</h1>
            <div>
              <a href="">
                <button className="LearnMore">LEARN MORE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tempapp;
