import React from 'react'

const footer = () => {
  return (
    <div>
        <div>
            
            {/* <!--=============== FOOTER ===============--> */}
            <footer className="footer section">
                <div className="footer__container Home-container grid">
                    
                    <div className="footer__content">
                        <h3 className="footer__title">Donate Now</h3>
                        <ul className="footer__links">

                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Our Services</h3>
                        <ul className="footer__links">

                            <li><a href="#" className="footer__link">Help with knowldge</a></li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Our Company</h3>
                        <ul className="footer__links">
                            <li><a href="#" className="footer__link">Blog</a></li>
                            <li><a href="#" className="footer__link">Our mision</a></li>
                            <li><a href="#" className="footer__link">Get in touch</a></li>
                            <li><a href="/AdminRes" className="footer__link">AdminRes</a></li>
                            <li><a href="/AdminPro" className="footer__link">AdminPro</a></li>
                            <li><a href="/AdminOrganization" className="footer__link">AdminOrganization</a></li>
                            <li><a href="/AdminExc" className="footer__link">AdminExchange</a></li>
                            <li><a href="/AdminEmp" className="footer__link">AdminEmployee</a></li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Community</h3>
                        <ul className="footer__links">
                            <li><a href="#" className="footer__link">Support</a></li>
                            <li><a href="#" className="footer__link">Questions</a></li>
                            <li><a href="#" className="footer__link">Customer help</a></li>
                        </ul>
                    </div>

                    <div className="footer__social">
                        <a href="#" className="footer__social-link"><i className='bx bxl-facebook-circle '></i></a>
                        <a href="#" className="footer__social-link"><i className='bx bxl-twitter'></i></a>
                        <a href="#" className="footer__social-link"><i className='bx bxl-instagram-alt'></i></a>
                    </div>
                </div>

                <p className="footer__copy">&#169; Nero Technologies | All Rights Reserved.</p>
            </footer>

            {/* <!--=============== SCROLL UP ===============--> */}
            <a href="#" className="scrollup" id="scroll-up">
                <i className='bx bx-up-arrow-alt scrollup__icon'></i>
            </a>

            {/* <!--=============== Boostrap JS ===============--> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>

    </div>
</div>
  )
}

export default footer