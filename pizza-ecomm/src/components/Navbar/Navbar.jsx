import { Dehaze, LocationOn, Phone, ShoppingCart,  } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
// import { useScrollPosition } from '../Hooks/useScrollPosition';

export default function Navbar() {

  const [navBarActive, setNavBarActive] = React.useState('pizza');
  // const scrollPosition = useScrollPosition();

  return (
    <div className='navbar'>
      <div className="first">
        <div className='firstIn'>
          <div className="phone">
            <Phone className='icon'/>
            <span className='number'>044 222 11 11</span>
          </div>
          <div className="geolocation">
            <LocationOn/>
            <span>Kyiv</span>
          </div>
          <div></div>
          <div className="buttons">
            <button className='language'>
              Eng
              <span className='icon'><KeyboardArrowDownIcon/></span>
            </button>
            <button className='login'>Sign In</button>
          </div>
        </div>
      </div>
      {/* <div className={scrollPosition > 50 ? 'second-sticky' : 'second'}> */}
      <div className='second'>
        <div className='secondIn'>
          <Link className='logo' to='/'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png' alt=''/>
            <span>Domino's Pizza</span>
          </Link>
          <nav className='nav'>
            <div className='nav-link'>
              <Link onClick={() => setNavBarActive('pizza')} 
              className={navBarActive === 'pizza' ? 'link-active' : 'link'} 
              to='/pizza/id'>
                Pizza
              </Link>
            </div>
            <div className='nav-link'>
              <Link onClick={() => setNavBarActive('drinks')} 
              className={navBarActive === 'drinks' ? 'link-active' : 'link'} 
              to='/drinks/id'>
                Drinks
              </Link>
            </div>
            <div className='nav-link'>
              <Link onClick={() => setNavBarActive('sides')} 
              className={navBarActive === 'sides' ? 'link-active' : 'link'} 
              to='/sides/id'>
                Sides
              </Link>
            </div>
            <div className='nav-link'>
              <Link onClick={() => setNavBarActive('dessert')} 
              className={navBarActive === 'dessert' ? 'link-active' : 'link'} 
              to='/dessert/id'>
                Dessert
              </Link>
            </div>
          </nav>
          <div></div>
          <div className='cart-wrapper'>
            <div className='cart'>
              <span>00</span>
              <ShoppingCart className='icon'/>
            </div>
            <div className='checkout'>checkout</div>
          </div>
          <div className='bar-menu'><Dehaze/></div>
        </div>
      </div>
      
    </div>
  )
}