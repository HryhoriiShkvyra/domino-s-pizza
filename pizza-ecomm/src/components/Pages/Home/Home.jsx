import React from 'react';
// import Card from '../../Card/Card';
import CardList from '../../CardList/CardList';
import Slider from '../../Slider/Slider';
import Sort from '../../Sorting/Sorting';
import './Home.scss';

export default function Home() {
  return (
    <div className='home'>
      <Slider/>
      <Sort/>
      <CardList type='sides'/>
      <CardList type='pizza'/>
    </div>
  )
}
