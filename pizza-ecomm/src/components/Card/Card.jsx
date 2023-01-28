import { ShoppingCart } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import CardQuantity from '../CardQuantity/CardQuantity';
import CardSize from '../CardSize/CardSize';
import useFetch from '../Hooks/useFetch';
import './Card.scss';

export default function Card({item, type}) {

  // const [cartStatus, setCartStatus] = React.useState(false)
  const typesOfProducts =  useFetch(`products?populate=*&[filters][type][$eq]=${type}`)
  console.log(typeof(type))


  return (
    <div className='card'>
        <div className="card-block">
          <div className="img-container">
              <img className='img-product' src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt=''/>
              {item?.attributes.isNew &&
              <div className='type'>
                <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/02/23/new.svg' alt='new'/>
                <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/03/27/plus-18.svg' alt='new'/>
                <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/02/23/chili.svg' alt='new'/>
              </div>
              }

              
              <div className='weight'>{item?.attributes.weight_1} g</div>
              <div className='bag-status'>
                <ShoppingCart style={{fontSize: '20px'}}/>
              </div>


          </div>
          <div className='product-about'>
            <Link className='product-title' to='/product/:id'>{item.attributes.title}</Link>
            { typesOfProducts === 'Pizza: Best Price' 
              ?
              null
              :
              <div>
                <h5 className='product-description'>{item.attributes.description}</h5>
                <Link className='ingredients' to='/pizza-constructor/:id'>replace ingredients</Link>
              </div>
              
            }
          
          </div>
          <CardSize item={item}/>
          <CardQuantity item={item}/>
        </div>
    </div>

  )
}
