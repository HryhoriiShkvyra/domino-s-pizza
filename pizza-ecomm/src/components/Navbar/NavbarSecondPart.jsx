import { Dehaze, ShoppingCart } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import './NavbarSecondPart.scss'
import { SideMenu } from '../SideMenu/SideMenu';
import { useSelector } from 'react-redux';

export default function SecondP() {

  const [sideBarActive, setSideBarActive] = React.useState(false)
  const [navBarActive, setNavBarActive] = React.useState('pizza');

  const productsInCart = useSelector(state => state.cart.items)

  function totalCount () {
    if (productsInCart.length < 10) {
      return('0'+ productsInCart.length)
    } else {
      return( 
        productsInCart.length
      )
    }
  }

  return (
    <>
      <div className='second'>
        <div className='secondIn'>
          <Link onClick={() => setNavBarActive('pizza')} className='logo' to='/'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png' alt=''/>
            <span>Domino's Pizza</span>
          </Link>
          <nav className='nav'>
            <div className='nav-link'>
              <Link onClick={() => setNavBarActive('pizza')} 
              className={navBarActive === 'pizza' ? 'link-active' : 'link'} 
              to='/pizza/'>
                Pizza
              </Link>
            </div>
            <div className='nav-link'>
              <Link onClick={() => setNavBarActive('drinks')} 
              className={navBarActive === 'drinks' ? 'link-active' : 'link'} 
              to='/drinks/'>
                Drinks
              </Link>
            </div>
            <div className='nav-link'>
              <Link onClick={() => setNavBarActive('sides')} 
              className={navBarActive === 'sides' ? 'link-active' : 'link'} 
              to='/sides/'>
                Sides
              </Link>
            </div>
            <div className='nav-link'>
              <Link onClick={() => setNavBarActive('dessert')} 
              className={navBarActive === 'dessert' ? 'link-active' : 'link'} 
              to='/dessert/'>
                Dessert
              </Link>
            </div>
          </nav>
          <div className='cart-wrapper'>
            <div className='cart'>
              <span>{totalCount()}</span>
              <ShoppingCart className='icon'/>
            </div>
            <Link className='checkout' onClick={() => setNavBarActive('checkout')} to='/checkout/'>checkout</Link>
          </div>
          <div onClick={() => setSideBarActive((prev) => !prev)} className='bar-menu'><Dehaze/></div>
          
        </div>
      </div>
      <div className='side-menu'>
        <SideMenu sideBarActive={sideBarActive}/>      
      </div>
    </>
  )
}
