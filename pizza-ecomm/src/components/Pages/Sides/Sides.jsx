import React from 'react';
import CardList from '../../CardList/CardList';
import Sorting from '../../Sorting/Sorting';
import './Sides.scss';

export default function Sides() {

  const [isSorting, setIsSorting] = React.useState('#')

  return (
    <div className='sides'>
      <Sorting setIsSorting={setIsSorting}/> 
      <CardList cathegory = 'sides' type= 'Combo-boxes' isSorting={isSorting}/>
      <CardList cathegory = 'sides' type= 'Bread' isSorting={isSorting}/>

    </div>
  )
}
