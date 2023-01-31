import React from 'react';
import CardList from '../../CardList/CardList'
import './Drinks.scss';

export default function Drinks() {
  return (
    <div className='drinks'>
      <CardList type='Water' cathegory='drinks'/>
      {/* <CardList type='Tea' cathegory='drinks'/> */}
    </div>
  )
}
