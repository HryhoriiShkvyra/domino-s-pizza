import React from 'react';
import CardList from '../../CardList/CardList';
import './Sides.scss';

export default function Sides() {
  return (
    <div className='sides'>
      <CardList type='Combo-boxes'/>
      <CardList type='Sides'/>

    </div>
  )
}
