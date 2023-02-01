import { ShoppingCart } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import CardQuantity from '../CardQuantity/CardQuantity';
import CardSize from '../CardSize/CardSize';
// import useFetch from '../Hooks/useFetch';
import './Card.scss';

export default function Card({item, type, cathegory}) {

  const inCart = true;
  const [isSize, setIsSize] = React.useState('standard-size')
  const [isCrust, setIsCrust] = React.useState('thick')
  const priceValue = [isSize, isCrust]

  console.log(type)


  return (
    <div className='card'>
        <div className="card-block">
          <div className="img-container">
            { cathegory === 'drinks' ? 
              <div className='img-product-drinks-wrapper'>
                <img className='img-product-drinks' src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt=''/>
              </div>
              :
             <img className='img-product' src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt=''/>
            }
            {/* {(() => {
              if (cathegory === 'drinks') {
                return(
                  <div>hello</div>
                )
              } else if () {
                <img className='img-product' src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt='nothing'/>
              }
            })()} */}
            {(() => {
              if (item.attributes.isAdult === true) {
                return(
                  <div className='type'>
                    <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/03/27/plus-18.svg' alt='new'/>  
                  </div>
                )
              } else if (item.attributes.isNew === true) {
                return (
                  <div className='type'>
                    <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/02/23/new.svg' alt='new'/>  
                  </div>
                  ) 
              } else if (item.attributes.isChili === true) {
                return (
                  <div className='type'>
                    <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/02/23/chili.svg' alt='new'/>  
                  </div>     
                )
              }
            })()}

              { cathegory === 'drinks' ?
                null
                :
                <div className='weight'>{item?.attributes.weight_1} g</div>
              }
              
              {inCart === true ? 
                null
                :
                <div className='cart-status'>
                  <ShoppingCart style={{fontSize: '20px'}}/>
                </div>
              }


          </div>
          <div className='product-about'>
            <Link className='product-title' to='/product/:id'>{item.attributes.title}</Link>
            { cathegory === 'pizza' 
              ?
              <div>
                <h5 className='product-description'>{item.attributes.description}</h5>
                <Link className='ingredients' to='/pizza-constructor/:id'>replace ingredients</Link>
              </div>
              :
              null
              
            }
          
          </div>
          <CardSize type={type} item={item} cathegory = {cathegory} priceValue = {priceValue} 
          isSize = {isSize} setIsSize = {setIsSize} isCrust = {isCrust} setIsCrust = {setIsCrust}
          />
          <CardQuantity item={item} priceValue = {priceValue} cathegory={cathegory}
           isSize = {isSize} setIsSize = {setIsSize}
          />
        </div>
    </div>

  )
}
