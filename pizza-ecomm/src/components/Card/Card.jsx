import { ShoppingCart } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import CardQuantity from '../CardQuantity/CardQuantity';
import CardSize from '../CardSize/CardSize';
import './Card.scss';

export default function Card({item}) {
  return (
    <div className='card'>
        <div className="card-block">
          <div className="img-container">
              <img className='img-product' src={item.img} alt=''/>
              {item?.attributes.isNew &&
              <div className='type'>
                <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/02/23/new.svg' alt='new'/>
              </div>
              }

              
              <div className='weight'>{item?.attributes.weight} g</div>
              <div className='bag-status'>
                <ShoppingCart style={{fontSize: '20px'}}/>
              </div>
          </div>
          <div className='product-about'>
            <Link className='product-title' to='/product/:id'>{item.attributes.title}</Link>
            <h5>{item.attributes.description}</h5>
            <Link className='ingredients'>replace ingredients</Link>
          </div>
          <CardSize item={item}/>
          <CardQuantity item={item}/>
        </div>
    </div>

  )
}
