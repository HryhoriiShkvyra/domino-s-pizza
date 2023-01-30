import React from 'react';
import CardList from '../../CardList/CardList';
import './Pizza.scss';

export default function Pizza() {
  return (
    <div className='pizza'>
      <CardList cathegory={'pizza'} type='Pizza: Best Price'/>
      <CardList cathegory={'pizza'} type='Pizza: Heroes'/>
    </div>
  )
}
