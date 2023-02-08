import React from 'react';
import Sorting from '../../Sorting/Sorting';
import CardList from '../../CardList/CardList'
import './Dessert.scss';

export default function Desserts() {

  const [isSorting, setIsSorting] = React.useState('#')

  return (
    <div className='dessert'>
      <Sorting setIsSorting={setIsSorting}/> 
      <CardList cathegory='dessert' type='Dessert' isSorting={isSorting}/>
    </div>
  )
}
