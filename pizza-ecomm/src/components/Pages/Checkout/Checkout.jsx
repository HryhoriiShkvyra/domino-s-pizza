import { Add, DeliveryDiningOutlined, KeyboardArrowDownOutlined, LocationOn, Remove, StorefrontOutlined } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './Checkout.scss';
import { incrementQuantity, decrementQuantity } from '../../redux/cartReducer';

export default function Checkout() {
  const products = useSelector(state => state.cart.products)

  const [activeBtn, setActiveBtn] = React.useState('delivery')
  const [quantity, setQuantity] = React.useState(0);

  const dispatch = useDispatch();
  function increaseQuantity () {
    dispatch(incrementQuantity({
      quantity: quantity,
    }))
  }

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2)
  }

  

  console.log(products)

  return (
    <div className='checkout-wrapper'>
      <div className='checkout-order'>
        <div className='first-block'>
          <h1 className='block-title'>Checkout order</h1>
          <div className='first-block-btns-wrapper'>
            {/* for btn which one clicked in moment need add border
              do this late, cuz right now I have not idea how to do this  */}
            <button className={activeBtn === 'delivery' ? 'first-block-btn-active' : 'first-block-btn'} onClick={() => setActiveBtn('delivery')}>
              <DeliveryDiningOutlined style={{fontSize: '40px'}}/>
              Delivery
            </button>
            <button className={activeBtn === 'carry' ? 'first-block-btn-active' : 'first-block-btn'} onClick={() => setActiveBtn('carry')}>
              <StorefrontOutlined style={{fontSize: '40px'}}/>
              Carry out
            </button>
          </div>
        
        </div>
        <div className='second-block'>
          <div className='second-block-info'>
            <h2 className='second-block-info-title'>Contacts</h2>
            <div className='second-block-info-wrapper'>
              <input className='second-block-info-input' placeholder='First Name' type="text"></input>
              <input className='second-block-info-input' placeholder='Phone' type="text"></input>
              <input className='second-block-info-input' placeholder='E-mail' type="text"></input>
      
            </div>
            
          </div>
          <div className='second-block-info'>
            <h2 className='second-block-info-title'>Store</h2>
            <div className="second-block-info-store-geolocation">
              <LocationOn style={{color: '#A8A8A8'}}/>
              <span className='second-block-info-store-geolocation-city'>Kyiv</span>
            </div>

            <div className='second-block-info-store-inputs'>
              <input className='second-block-info-choose-store' type="text" placeholder='Choose Store'/>
              <KeyboardArrowDownOutlined className='second-block-info-choose-store-icon'/>
              <textarea className='second-block-info-comments' type="text" rows="4" cols="50" placeholder='Comments'/>
            </div> 
          </div>

          <div className='second-block-info'>
            <h2 className='second-block-info-title'>Date and Time</h2>
            <div className='second-block-info-wrapper'>
              <input className='second-block-info-input' type="text" placeholder='Today'/>
              <input className='second-block-info-input' type="text" placeholder='Now'/>
            </div>
          </div>

          <div className='second-block-info'>
            <h2 className='second-block-info-title'>Payment</h2>
            <div className='second-block-info-wrapper'>
              <input className='second-block-info-input' type="text" placeholder='Use coupon'/>
              <input className='second-block-info-input' type="text" placeholder='Change'/>
              <span></span>
              <input className='second-block-info-input' type="text" placeholder='Payment type'/>

            </div>
          </div>
          <div className='second-block-final-price-wrapper'>
            <h2 className='second-block-final-price-total'>Total</h2>
            <h2 className='second-block-final-price'><span className='second-block-final-price-count'>{totalPrice()}</span> uah</h2>
            <button className='second-block-final-price-btn'>Checkout</button>
          </div>

        </div>
      </div>      
      <div className='right'>
        <span className='block-title'>Your order</span>
        <div className='right-wrapper'>
          {products.map((item) => (
                <div className='right-product' key={item.id}>
                  <img className='right-product-image' src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="#" />
                  <div className="right-product-text">
                    <span className='right-product-title'>{item.title}</span>
                    <span className='right-product-ingredients'>{item.description}</span>
                    <span className='right-product-crust'>{item.size}</span>
                    <span className='right-product-price'>{item.price}<h5 className='right-price-currency'>uah</h5></span>
                    <span className='right-product-quantity'>
                      <button className='quantity-btn' onClick={() => (setQuantity(quantity - 1))} style={{marginLeft: '-1px'}} >
                        <Remove/>
                      </button> 
                      <div className='count'>
                        {item.quantity} 
                      </div>
                      <button className='quantity-btn' onClick={() => (increaseQuantity())} style={{margin: '-1px'}}>
                        <Add/>
                      </button>
                    </span>
                  </div>
                </div>
              ))}
          <div className="right-price-wrapper">
            <span className='right-price'>{totalPrice()}<h5 className='right-price-currency'>uah</h5></span>
          </div>
        </div>
      </div>      
    </div>
  )
}
