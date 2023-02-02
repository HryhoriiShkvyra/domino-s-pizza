import React from 'react';
import CardList from '../../CardList/CardList'
import './Dessert.scss';

export default function Desserts() {
  return (
    <div className='dessert'>
      <CardList cathegory='dessert' type='Dessert'/>
    </div>
  )
}
