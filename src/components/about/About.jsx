import React from 'react';
import "./about.css"
import Image from "../../assets/avatar-2.svg"

const About = () => {
  return (
    <section className="about container section" id="about">
      <div className="about__container grid">
        <div className="about_img">

        </div>
        <div className="about__info">
          <div className="about__description">
            <p>
              I'm Alexandra Lup, graphic designer from Belgium. <br />
              Intrigued to see my work? <br />
              Do not hesitate to check it out below.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>
          <h2 className="section__title">ABOUT ME</h2>
        </div>
      </div>
    </section>
  )
}

export default About