import React from 'react';
import NavbarSecondPart from '../../Navbar/NavbarSecondPart';
import Sorting from '../../Sorting/Sorting';
import CardList from '../../CardList/CardList';
import './Pizza.scss';

export default function Pizza() {

  const [isSorting, setIsSorting] = React.useState('#')

  return (
    <div className='pizza'>
      <NavbarSecondPart/>
      <div className='pizza-container'>
        <Sorting setIsSorting={setIsSorting}/> 
        <CardList cathegory='pizza' type='Pizza: Best Price' isSorting={isSorting}/>
        <CardList cathegory='pizza' type='Pizza: Heroes' isSorting={isSorting}/>
      </div>
    </div>
  )
}
