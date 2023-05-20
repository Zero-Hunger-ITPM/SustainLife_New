import React from 'react'
import logo from "../images/logo2.png"
import {Link} from "react-router-dom";

const header = () => {
  return (
  
  <div>
    
    {/* <!--=============== HEADER ===============--> */}
    <header className="header" id="header">
        <nav className="nav container">
            <a href="/" className="nav__logo"><img className="Home-logo" src={logo} alt="logo"/> SASTAIN LIFE</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">About us</a>
                    </li>

                    <li className="nav__item">
                        <a href="/RestaurantHomenew" className="nav__link">Foods</a>
                    </li>

                    <li className="nav__item">
                        <a href="#blog" className="nav__link">Blog</a>
                    </li>
                   
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">Contact us</a>
                    </li>
                    <i className='bx bx-toggle-left change-theme' id="theme-button"></i>
                </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-grid-alt'></i>
            </div>

            <a href="/signin" className="button button__header"> <Link to={`/Login/`} >Login </Link></a>
        </nav>
    </header>
    
  </div>
  
  )
}

export default header