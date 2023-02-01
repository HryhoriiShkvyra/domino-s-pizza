import React from 'react';
import CardList from '../../CardList/CardList'
import './Drinks.scss';

export default function Drinks() {


  return (
    <div className='drinks'>
      <CardList cathegory='drinks' type='Water'/>
      <CardList cathegory='drinks' type='Tea'/>
      {/* <CardList type='Tea' cathegory='drinks'/> */}
    </div>
  )
}
