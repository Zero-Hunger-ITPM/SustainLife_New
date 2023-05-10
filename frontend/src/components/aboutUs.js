import React from 'react'
import img1 from "../images/aboutus.png"

const aboutUs = () => {
  return (
        <div>
            <div>
                <main className='main'>
                {/* <!--=============== About US ===============--> */}
                <section className="about section Home-container" id="about">
                   
                        <div className="about__container grid">
                            <div className="about__content">
                            <h2 className="section__title-center">Find Out A Little More <br/> About Us</h2>
                           <a> <img className="Home-bg" src={img1} alt="bg"/> </a>
                            </div>
                            <p className="about__description">Sustain Life web application has four core functions,
                                 they are Donation, managing food wastage, exchanging items for food, and Educating people about zero hungry. 
                                 For the donation organizations or donators should have to create an account as donators, then they can donate money or food for needy 
                                 people from our web application, To manage food wastage restaurants or food shops should have to engage with our system by creating 
                                 a user account and they can publish there extra food items for fair prices, for the end of the day when they have extra foods they 
                                 can share their food for free also. 
                                The seller deals with items like source items to make products or something that deals with the seller.</p>
                            </div>
                           
                     
                    </section>
                </main>
            </div>
        </div>
  )
}

export default aboutUs