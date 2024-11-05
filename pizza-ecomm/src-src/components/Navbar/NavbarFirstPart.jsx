import { LocationOn, Phone, } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import './NavbarFirstPart.scss';
import { Link } from 'react-router-dom';

export default function NavbarFirstPart() {




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
            <Link className='login' to='/user-container/' >Sign In</Link>
          </div>
        </div>
      </div>      
      
    </div>
  )
}
