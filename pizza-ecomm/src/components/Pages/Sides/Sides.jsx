import React from 'react';
import CardList from '../../CardList/CardList';
import './Sides.scss';

export default function Sides() {
  return (
    <div className='sides'>
      <CardList cathegory = 'sides' type= 'Combo-boxes'/>
      <CardList cathegory = 'sides' type= 'Bread'/>

    </div>
  )
}
