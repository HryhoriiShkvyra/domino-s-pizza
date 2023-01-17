import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='section'>
        <h2>Domino's Pizza</h2>
        <Link className='link'>Menu</Link>
        <Link className='link'>Pizzerias</Link>
        <Link className='link'>Franchising</Link>
        <Link className='link'>Information about the content of allergens and nutritional value</Link>
        <Link className='link'>Food safety policy</Link>
                                          
        <Link className='link-creators'>site developed by fiter.io</Link>
      </div>
      <div className='section'>
        <h2>Services</h2>
      </div>
      <div className='section'>
        <h2>Contacts</h2>
      </div>
      <div className='section'>
        <h2>
          <Link className='logo' to='/'>
            {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png' alt=''/> */}
            <span>Domino's Pizza</span>
          </Link>
          </h2>
      </div>
    </div>
  )
}
