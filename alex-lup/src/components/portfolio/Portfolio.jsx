import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })
    setItems(updatedItems);
  }
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">MY WORK</h2>
      <div className="work__filters">
        <span className="work__item"onClick={() => setItems(Menu)}>All</span>
        <span className="work__item" onClick={() => filterItem
        ("Art")}>Art</span>
        <span className="work__item" onClick={() => filterItem
        ("Design")}>Design</span>
        <span className="work__item" onClick={() => filterItem
        ("Branding")}>Branding</span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, category} = elem;
          return (
            <a href="#" className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button"></a>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio