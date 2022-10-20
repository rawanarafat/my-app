import React, { useState } from "react";
import "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/web.css";
import ProCard from "./ProjectsCards";
import data from "./Projectsdata";
import github from "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/components/icons8-github-50.png";

const Projects = () => {
  const [Active, setActive] = useState("first");

  return (
    <div className="psd">
      <li>
        <div className="procards">
          <button className="btnn" onClick={() => setActive("first")}>
            Tic Tac Toe Game
          </button>
          {<ProCard className="prodatas" data={data} cardIndex={0} />}
          <a className="btnn1" href="https://github.com/rawanarafat/tic-tac-toe-game"><img className="githublogo1" alt="github logo" src={github} width="50" height="50" /></a>
          <br></br>
          <br></br>
        </div>

        <div className="procards">
          <button className="btnn" onClick={() => setActive("first")}>
            Burger King App Demo
          </button>
          {<ProCard className="prodatas2" data={data} cardIndex={1} />}
          <a className="btnn1" href="https://github.com/rawanarafat/BurgerKingAppDemo"><img className="githublogo2" alt="github logo" src={github} width="50" height="50" /></a>
        </div>


        <div className="procards">
          <button className="btnn" onClick={() => setActive("first")}>
          Face Detector Program
          </button>
          {<ProCard className="prodatas2" data={data} cardIndex={2} />}
          <a className="btnn1" href="https://github.com/rawanarafat/face-detector"><img className="githublogo3" alt="github logo" src={github} width="50" height="50" /></a>
        </div>


        <div className="procards">
          <button className="btnn" onClick={() => setActive("first")}>
           The Game of Nim
          </button>
          {<ProCard className="prodatas2" data={data} cardIndex={3} />}
          {/*<a className="btnn1" href="https://github.com/"><img className="githublogo4" alt="github logo" src={github} width="50" height="50" /></a>*/}
        </div>

      </li>
    </div>
  );
};

export default Projects;
