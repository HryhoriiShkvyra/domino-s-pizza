import React from 'react';
import NavbarSecondPart from '../../Navbar/NavbarSecondPart';
import CardList from '../../CardList/CardList'
import Sorting from '../../Sorting/Sorting';
import Filter from '../../Filter/Filter';
import './Drinks.scss';

export default function Drinks() {

  const [isSorting, setIsSorting] = React.useState('#')


  return (
    <div className='drinks'>
      <NavbarSecondPart/>
      <div className='drinks-container'>
        <Sorting setIsSorting={setIsSorting}/> 
        <Filter/>
        <CardList cathegory='drinks' type='Water' isSorting={isSorting}/>
        <CardList cathegory='drinks' type='Tea' isSorting={isSorting}/>
      </div>
    </div>
  )
}
