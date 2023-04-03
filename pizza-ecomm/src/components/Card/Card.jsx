import { ShoppingCart } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import CardQuantity from '../CardQuantity/CardQuantity';
import CardSize from '../CardSize/CardSize';
import './Card.scss';

export default function Card({item, type, cathegory}) {



  const inCart = true;
  const [isSize, setIsSize] = React.useState('standard-size')
  const [isCrust, setIsCrust] = React.useState('thick')
  const priceValue = [isSize, isCrust]


  console.log(item)

  const weightCount = () => {
      if (cathegory === 'pizza') {
          if (`${priceValue}` === 'standard-size,thick') {
              return (
                  (item.attributes.weight_1)
              )
              } else if (`${priceValue}` === 'standard-size,thin') {
              return (
                  (item.attributes.weight_2)
              )
              } else if (`${priceValue}` === 'standard-size,philadelphia') {
              return (
                  (item.attributes.weight_3)
              )
              } else if (`${priceValue}` === 'standard-size,hot-dog') {
                  return(
                      (item.attributes.weight_4)
                  )
              } else if (`${priceValue}` === 'large,thick') {
                  return(
                      (item.attributes.weight_5)
                  )
              } else if (`${priceValue}` === 'large,thin') {
                  return(
                      (item.attributes.weight_6)
                  )
              } else if (`${priceValue}` === 'large,philadelphia') {
                  return (
                      (item.attributes.weight_7)
                  )
              } else if (`${priceValue}` === 'large,hot-dog') {
                  return(
                      (item.attributes.weight_8)
                  )
              } else if (`${priceValue}` === 'extra,thick') {
                  return(
                      (item.attributes.weight_9)
                  )
              } else if (`${priceValue}` === 'extra,thin') {
                  return(
                      (item.attributes.weight_10)
                  )
              } else if (`${priceValue}` === 'extra,philadelphia') {
                  return(
                      (item.attributes.weight_11)
                  )
              } else if (`${priceValue}` === 'extra,hot-dog') {
                  return(
                      (item.attributes.weight_12)
                  )
              // } else if (`${priceValue}` === 'xxl,thick') {
              //     return(
              //         (item.attributes.price_13)
              //     ) 
              } else if (`${priceValue}` === 'xxl,thin') {
                  return(
                  (item.attributes.weight_14)
              )
              } else if (`${priceValue}` === 'xxl,philadelphia') {
                  return(
                      (item.attributes.weight_15)
                  )
              } else if (`${priceValue}` === 'xxl,hot-dog') {
                  return (
                      (item.attributes.weight_16)
                      )
                  }
          }

      if (cathegory === 'sides') {
          if (`${isSize}` === 'standard-size') {
              return (
                  (item.attributes.weight_1)
              )
          } else if (`${isSize}` === 'double') {
              return (
                  (item.attributes.weight_2)
              )
          } else if (item.attributes.size_2 == null) {
              return (
                  (item.attributes.weight_1)
              )
          }
      }   

      if (cathegory === 'drinks') {
          if (`${isSize}` === 'standard-size') {
          return (
              (item.attributes.weight_1)
          )
          } else if (`${isSize}` === 'large') {
              return (
                  (item.attributes.weight_2)
              )
          } else if (`${isSize}` === 'extra') {
              return (
                  (item.attributes.weight_3)
              )
          }
      }

      if (cathegory === 'dessert') {
          if (`${isSize}` === 'double') {
              return(
                  (item.attributes.weight_2)
              )
          } else {
              return(
                  (item.attributes.weight_1)
              )
          }
      }
  }  

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
            
              {/* {(() => {
                if (item.attribute.weight_1 === null) {
                  return(
                    null
                  )
                } else if (item.attribute.weight === )
                  
              })()} */}
              { item.attributes.weight_1 === null ?
                null
                :
                <div className='weight'>{weightCount()} g</div>
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
                <Link className='ingredients' to={`/product/${item.id}`}>replace ingredients</Link>
              </div>
              :
              null
            }
          
          </div>
          <CardSize type={type} item={item} cathegory = {cathegory} priceValue = {priceValue} 
          isSize = {isSize} setIsSize={setIsSize} isCrust={isCrust} setIsCrust={setIsCrust} 
          />
          <CardQuantity item={item} priceValue = {priceValue} cathegory={cathegory}
           isSize = {isSize} isCrust={isCrust} 
          />
        </div>
    </div>

  )
}
