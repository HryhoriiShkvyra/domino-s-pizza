import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import './CardQuantity.scss';

export default function CardQuantity({item, priceValue, cathegory, isSize}) {

    const [count, setCount] = React.useState(0)
  

    return (
        <div className='card-quantity'>
            <div className='card-price'>
                {(() => {
                    
                    if (cathegory === 'pizza') {
                        if (`${priceValue}` === 'standard-size,thick') {
                            return (
                                (item.attributes.price_1)
                            )
                            } else if (`${priceValue}` === 'standard-size,thin') {
                            return (
                                (item.attributes.price_2)
                            )
                            } else if (`${priceValue}` === 'standard-size,philadelphia') {
                            return (
                                (item.attributes.price_3)
                            )
                            } else if (`${priceValue}` === 'standard-size,hot-dog') {
                                return(
                                    (item.attributes.price_4)
                                )
                            } else if (`${priceValue}` === 'large,thick') {
                                return(
                                    (item.attributes.price_5)
                                )
                            } else if (`${priceValue}` === 'large,thin') {
                                return(
                                    (item.attributes.price_6)
                                )
                            } else if (`${priceValue}` === 'large,philadelphia') {
                                return (
                                    (item.attributes.price_7)
                                )
                            } else if (`${priceValue}` === 'large,hot-dog') {
                                return(
                                    (item.attributes.price_8)
                                )
                            } else if (`${priceValue}` === 'extra,thick') {
                                return(
                                    (item.attributes.price_9)
                                )
                            } else if (`${priceValue}` === 'extra,thin') {
                                return(
                                    (item.attributes.price_10)
                                )
                            } else if (`${priceValue}` === 'extra,philadelphia') {
                                return(
                                    (item.attributes.price_11)
                                )
                            } else if (`${priceValue}` === 'extra,hot-dog') {
                                return(
                                    (item.attributes.price_12)
                                )
                            // } else if (`${priceValue}` === 'xxl,thick') {
                            //     return(
                            //         (item.attributes.price_13)
                            //     ) 
                            } else if (`${priceValue}` === 'xxl,thin') {
                                return(
                                (item.attributes.price_14)
                            )
                            } else if (`${priceValue}` === 'xxl,philadelphia') {
                                return(
                                    (item.attributes.price_15)
                                )
                            } else if (`${priceValue}` === 'xxl,hot-dog') {
                                return (
                                    (item.attributes.price_16)
                                    )
                                }
                        }

                    if (cathegory === 'sides') {
                        if (`${isSize}` === 'standard-size') {
                            return (
                                (item.attributes.price_1)
                            )
                        } else if (`${isSize}` === 'double') {
                            return (
                                (item.attributes.price_2)
                            )
                        } else if (item.attributes.size_2 == null) {
                            return (
                                (item.attributes.price_1)
                            )
                        }
                    }   

                    if (cathegory === 'drinks') {
                        if (`${isSize}` === 'standard-size') {
                        return (
                            (item.attributes.price_1)
                        )
                        } else if (`${isSize}` === 'medium') {
                            return (
                                (item.attributes.price_2)
                            )
                        } else if (item.attributes.size_3 === 'big') {
                            return (
                                (item.attributes.price_3)
                            )
                        }
                    }

                    if (cathegory === 'dessert') {
                        if (`${isSize}` === 'double') {
                            return(
                                (item.attributes.price_2)
                            )
                        } else {
                            return(
                                (item.attributes.price_1)
                            )
                        }
                    }
                })()}

                <span>uah</span>
            </div>
            {   count === 0 ?
                <div className='card-add-to-cart' onClick={() => (setCount(count + 1))}>
                    To cart
                </div>
            :
                <div className='increase-decrease-quantity'>
                        <button className='quantity-btn' onClick={() => (setCount(count - 1))} style={{marginLeft: '-1px'}} >
                            <Remove className='quantity'/>
                        </button>
                    
                    <div className='count'>
                        {count} 
                    </div>
                        <button className='quantity-btn' onClick={() => (setCount(count + 1))} style={{margin: '-1px'}}>
                            <Add/>
                        </button>
                </div> 
            }
        
            
            {/* <div className='card-add-to-cart'>
                <button>+</button>
                <span>0</span>
                <button>-</button>
            </div> */}

            {/* {
            count === 0 ?
                <button className={classes.productBlockWrap}>To cart</button>
                  
            :
            <div className={classes.increaseDecreaseBtns}>
                <div className={classes.decreaseBtn}>
                    <button className={classes.decrease} >
                        <i class="fa-solid fa-minus"></i>
                    </button>
                </div>
                
                <div className={classes.count}>
                    {count} 
                </div>
                <div className={classes.increaseBtn}>
                    <button className={classes.increase} >
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div> 
            } */}
        </div>
    )
}
