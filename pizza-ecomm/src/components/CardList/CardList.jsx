import { Info } from '@mui/icons-material';
import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

export default function CardList() {
  return (
    <div className='card-list'>
        <div className='container'>
            <div className='list-title'>
              Pizza List 
              <span>
                <Info className='icon'/>
              </span>
            </div>
            <div className='card-list-block'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
       
    </div>
  )
}
