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


  

  // const forEach = (arr, cb) => {
  //   for(let i = 0; i < + arr.length; i++) {
  //     const element = arr
  //     cb(element)
  //   }
  // }

  // setTimeout(() =>
  //   forEach(datas, (data) => {
  //     console.log(data)
  //   })
  //   , 5000)
 

  // const {data, loading, error} = useFetch(
  //   `products?populate=*&[filters][price_1][$eq]=${type}$`
  // );
  
  // console.log(useFetch)

  return (
    <div className='card'>
        <div className="card-block">
          <div className="img-container">

            {(() => {
              if (cathegory === 'drinks') {
                if (item.attributes.type === 'Water') {
                  return(
                    (
                      <img className='img-product-drinks-water' src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt=''/>
                    )
                  )
                } if (type === 'Tea') {
                    return(
                      (
                        <img className='img-product-drinks-tea' src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt=''/>
                      )
                    )
                }
              } else if (item.attributes.title === 'Sweet sauce 50g') {
                return (
                  (
                    <img className='img-product-sweet-sauce' src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt=''/>  
                  )
                )
              } else {
                return (
                  (
                    <img className='img-product' src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt=''/>  
                  )
                )
              }
              
            })()}
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

              { item.attributes.weight_1 === null ?
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
          <CardQuantity item={item} type={type} priceValue = {priceValue} cathegory={cathegory}
           isSize = {isSize} setIsSize = {setIsSize}
          />
        </div>
    </div>

  )
}
