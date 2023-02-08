import React from 'react';
import Slider from '../../Slider/Slider';
import Pizza from '../Pizza/Pizza';
import './Home.scss';

export default function Home() {


  return (
    <div className='home'>
      <Slider/>
      <Pizza/>
    </div>
  )
}
