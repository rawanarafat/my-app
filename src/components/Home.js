import "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/web.css";
import mail from "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/components/mail.png";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import space from "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/components/space.png";
import Experiance from "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/components/Experiance.js";
import Projects from "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/components/Projects.js";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="spaceimg">
        <img alt="space" src={space} width="300" height="300" /> <br></br>
      </div>
      <div className="spaceh">
        <br></br>
      </div>

      <div className="intro" id="intro">
        <h1>hey! its Rawan </h1>
        <h2 className="title">
          I'm a software engineer based in Ontario. I have profound interest{" "}
          <br></br> in full-stack development, machine learning, human-computer{" "}
          <br></br> interactions, mobile apps development and everything in
          between.
        </h2>
        <a href="mailto:rawanarafat@hotmail.com">
          <img alt="mail" src={mail} width="70" height="70" />{" "}
          <span className="text">Say Hi</span>
        </a>
        {/*<div className="links">
        <h3>/ Links</h3>
        <a href="https://www.etsy.com/ca/shop/VanillaUnlimited">/ Etsy Shop </a>
        <a href="https://www.etsy.com/ca/shop/VanillaUnlimited">/ LinkedIn </a>
        <a href="https://www.etsy.com/ca/shop/VanillaUnlimited">/ Instagram </a>


  </div>*/}
      </div>

      <div className="space">
        <br></br>

        <br></br>
      </div>

      <div data-aos="fade-up">
        <p className="header">/ about me </p>
        <p className="description">
          I am currently a fourth year Computer Science major at{" "}
          <a className="link" href="https://www.uwindsor.ca">
            University of Windsor
          </a>
          . i just completed a four months internship working as Software
          Engineer at{" "}
          <a className="link" href="https://www.wallstreetprofessionals.org">
            Wall Street Professionals
          </a>{" "}
          in Toronto.{" "}
        </p>
        <p className="description">
          Here are some technologies I have been working with:
        </p>
        <ul className="list">
          <li>python</li>
          <li>java</li>
          <li>react</li>
          <li>node</li>
          <li>html</li>
          <li>css</li>
          <li>JavaScript</li>
          <li>PHP</li>
        </ul>
      </div>

      <div className="outwork">
        <p>
          Outside of work, i like to play video games, read and i also have my
          small business that i run from home. you can check it out at{" "}
          <a
            className="etsy"
            href="https://www.etsy.com/ca/shop/VanillaUnlimited"
          >
            My etsy Shop
          </a>
        </p>
      </div>

      <div data-aos="fade-up">
        <p className="header">/ experience</p>
        <Experiance />
      </div>

      {/*<div className="linkss">
        <h3>/ Links</h3>
        <a href="https://www.etsy.com/ca/shop/VanillaUnlimited">/ Etsy Shop </a>
        <a href="https://www.etsy.com/ca/shop/VanillaUnlimited">/ LinkedIn </a>
        <a href="https://www.etsy.com/ca/shop/VanillaUnlimited">/ Instagram </a>


  </div>*/}

      <div data-aos="fade-up">
        <p className="header">/ projects</p>

        <br></br>
      </div>
      <div data-aos="fade-up">
        <div className="spaces">
          <Projects />
        </div>
      </div>

      {/* <a href="#intro">/home</a> */}
      <p className="rights">Built and designed by Rawan Arafat <br></br>All rights reserved. ©</p>
    </div>
    
  );
};

export default Home;
