import React from 'react'
import bg from "../images/bg.png"

const cover = () => {
  return (
  
    <div>
    <div>
      <main className="main">
      {/* <!--=============== HOME ===============--> */}
          <section className="about section Home-container" id="home">
            
              <div className='home__container Home-container grid'>
                
              <a href="/" className="svg__img svg__color home__img" >
                <img className="Home-bg" src={bg} alt="bg"/> </a>
                <defs>
                    <h1 className='home__title'>Sustain Life</h1>
                <h2 className='home_description'> This is a solution for Zero Hungry.</h2>
                <div className="contact__content">
                                <a href="/Donation" className="button">Donate Now</a>
                            </div>
                <clipPath id="clip0">
                <rect width="312" height="236" top="20%" fill="white"/>
                </clipPath>
                </defs>
              </div>
                  </section>
              </main>
            </div>
    </div>
  )
}

export default cover