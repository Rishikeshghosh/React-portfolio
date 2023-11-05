import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Rishikesh Ghosh</h1>
            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                 <li>
                    <a href="#skills" className='footer__link'>Projects</a>
                </li>
                 <li>
                    <a href="#testimonials" className='footer__link'>Testimonials</a>
                </li>

            </ul>
            <div className="footer__socials">
                   <a href="" className='footer__social-icon' target="_blank">
                     <i class="bx bxl-facebook"></i>
                   </a>
                   <a href="" className='footer__social-icon' target="_blank">
                     <i className='bx bxl-instagram'></i>
                   </a>
                   <a href="" className='footer__social-icon' target="_blank">
                     <i className='bx bxl-twitter'></i>
                   </a>
            </div>

            <span className='footer__copy'>&#169; Rishikesh ghosh. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer