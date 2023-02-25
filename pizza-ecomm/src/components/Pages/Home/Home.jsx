import React from 'react';
import NavbarSecondPart from '../../Navbar/NavbarSecondPart';
import Slider from '../../Slider/Slider';
import Pizza from '../Pizza/Pizza';
import './Home.scss';

export default function Home() {


  return (
    <div className='home'>
      <NavbarSecondPart/>
      <Slider/>
      <Pizza/>
    </div>
  )
}
