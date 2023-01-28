import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import './CardQuantity.scss';

export default function CardQuantity({item}) {

    const [count, setCount] = React.useState(0)
  
    

    return (
        <div className='card-quantity'>
            <div className='card-price'>
                {item?.attributes.price_1}
                <span>uah</span>
            </div>
            {   count === 0 ?
                <div className='card-add-to-cart' onClick={() => (setCount(count + 1))}>
                    To cart
                </div>
            :
                <div className='increase-decrease-quantity'>
                    {/* <div className='decrease-quantity'> */}
                        <button className='quantity-btn' onClick={() => (setCount(count - 1))} style={{marginLeft: '-1px'}} >
                            <Remove className='quantity'/>
                        </button>
                    {/* </div> */}
                    
                    <div className='count'>
                        {count} 
                    </div>
                    {/* <div className='increase-quantity'> */}
                        <button className='quantity-btn' onClick={() => (setCount(count + 1))} style={{margin: '-1px'}}>
                            <Add/>
                        </button>
                    {/* </div> */}
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
