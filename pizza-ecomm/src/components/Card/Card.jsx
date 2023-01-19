import { ShoppingCart } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import CardQuantity from '../CardQuantity/CardQuantity';
import CardSize from '../CardSize/CardSize';
import './Card.scss';

export default function Card() {
  return (
    <div className='card'>
        <div className="card-block">
          <div className="img-container">
              <img className='img-product' src='https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg' alt=''/>
              <div className='type'>
                  <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/02/23/new.svg' alt='new'/>
              </div>
              <div className='weight'>587 g</div>
              <div className='bag-status'>
                <ShoppingCart style={{fontSize: '20px'}}/>
              </div>
          </div>
          <div className='product-about'>
            <Link className='product-title' to='/product/:id'>Pizza Name</Link>
            <h5>(double serving of mushrooms), Mushrooms, Mozarella, Peperoni, Al'fredo sauce</h5>
            <div className='ingredients'>replace ingredients</div>
          </div>
          <CardSize/>
          <CardQuantity/>
        </div>
    </div>

  )
}
