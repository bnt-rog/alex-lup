import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg"

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo"></a>
      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About me
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023</span>
      </div>
    </aside>
  )
}

export default Sidebar