import React from 'react'
import "./home.css"


// import Header from './header'
import Footer from './footer'
import Header from './header'
import Cover from './cover'

import ContactUs from './contactUs'
import AboutUs from './aboutUs'

const home = () => {
    return (
      <div className='home'>
         <Header/>
          <Cover/>
          <AboutUs/>
          <ContactUs/>
          
          <Footer/>
      </div>
    )
  }
  
  export default home
