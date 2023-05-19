import React from 'react'
import bg from "../../images/foodwaste.png"
import "./resturanthome.css"
import Header from '../../components/header'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pns from "../../images/pns.png"
import dominos from "../../images/dominos.png"
import bread from "../../images/bread.png"
import kfc from "../../images/KFC_logo.svg.png"
import Footer from '../../components/footer'

const resturanthome = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
  
    <div>
       <Header/>
    <div>
      <main className="main">
          
            
              <div className='home__container Home-container grid'>
                
              <a href="/" className="svg__img svg__color home__img" >
                <img className="Home-bg" src={bg} alt="bg"/> </a>
                <defs>
                <h3 className='home_description'>Join with us and give your daily production surplus to quench the hunger of another and reduce your resturant's food wastage.</h3>
                <br></br>
                <a href="/FoodItemDetailsNew" className="button">Foods</a>
                <br></br>
                <br></br>
                <h2 className='home_description'> Restaurant coloborations</h2>
                <div className="contact__content">
                                <br></br>
                                <a href="/RestaurantForm" className="button">Join with Us</a>
                                <br></br>
                            </div>
                <clipPath id="clip0">
                <rect width="312" height="236" top="20%" fill="white"/>
                </clipPath>
                </defs>
              </div>
                
              </main>
            </div>  
            <div className="skill" id="skills">
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>In Colloboration with us</h2>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={pns} alt="Image" />
                                <h5>Perera & Sons</h5>
                            </div>
                            <div className="item">
                                <img src={dominos} alt="Image" />
                                <h5>Dominos Pizza</h5>
                            </div>
                            <div className="item">
                                <img src={kfc} alt="Image" />
                                <h5>KFC</h5>
                            </div>
                            <div className="item">
                                <img src={bread} alt="Image" />
                                <h5>Bread & Talk</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        </div> 
            <Footer/>
    </div>
    
  )
}

export default resturanthome