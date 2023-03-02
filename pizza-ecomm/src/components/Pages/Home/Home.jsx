import React from 'react';
import NavbarSecondPart from '../../Navbar/NavbarSecondPart';
import Slider from '../../Slider/Slider';
import CardList from '../../CardList/CardList';
import isSorting from '../../Sorting/Sorting'
import './Home.scss';

export default function Home() {


  return (
    <div className='home'>
      <NavbarSecondPart/>
      <Slider/>
      <CardList cathegory='pizza' type='Pizza: Best Price' isSorting={isSorting}/>
      <CardList cathegory='pizza' type='Pizza: Heroes' isSorting={isSorting}/>    
    </div>
  )
}
