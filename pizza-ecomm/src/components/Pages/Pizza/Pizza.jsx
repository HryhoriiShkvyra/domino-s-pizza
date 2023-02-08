import React from 'react';
import Sorting from '../../Sorting/Sorting';
import CardList from '../../CardList/CardList';
import './Pizza.scss';

export default function Pizza() {

  const [isSorting, setIsSorting] = React.useState('#')

  return (
    <div className='pizza'>
      <Sorting setIsSorting={setIsSorting}/> 
      <CardList cathegory='pizza' type='Pizza: Best Price' isSorting={isSorting}/>
      <CardList cathegory='pizza' type='Pizza: Heroes' isSorting={isSorting}/>
    </div>
  )
}
