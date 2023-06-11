import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header id="header" className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
        Future Leaders Fund
        </a>

        <div className={Toggle ? "nav__menu show_menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to={"/"} className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Home
              </Link>
            </li>

            <li style={{ color: "#990033" }} className="nav__item">
            <Link to={"/donate"} className="nav__link">
                <i className="uil uil-user nav__icon"></i>Donate
              </Link>
            </li>

            <li className="nav__item">
              <Link to='/contact' className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </Link>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;