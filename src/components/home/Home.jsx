import React from 'react';
import "./home.css"
import Me from "../../assets/avatar-1.svg"
import HomeSocials from './HomeSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt ="" lassName="home__img" />
        <h1 className="home__name">ALEXANDRA LUP</h1>
        <span className="home__education">Graphic Designer</span>

        <HomeSocials />
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home