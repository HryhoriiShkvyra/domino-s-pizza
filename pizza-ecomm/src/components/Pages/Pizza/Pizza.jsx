import React from 'react';
import CardList from '../../CardList/CardList';
import './Pizza.scss';

export default function Pizza() {
  return (
    <div className='pizza'>
      <CardList type='Pizza: Best Price'/>
      <CardList type='Pizza: Heroes'/>    
    </div>
  )
}
