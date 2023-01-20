import { DeliveryDiningOutlined, KeyboardArrowDownOutlined, LocationOn, StorefrontOutlined } from '@mui/icons-material';
import React from 'react';
import './Checkout.scss';

export default function Checkout() {

  const [activeBtn, setActiveBtn] = React.useState('delivery')

  return (
    <div className='checkout-wrapper'>
      <div className='checkout-order'>
        <div className='first-block'>
          <h1 className='first-block-title'>Checkout order</h1>
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
            <h2 className='second-block-final-price'><span className='second-block-final-price-count'>0.00</span> uah</h2>
            <button className='second-block-final-price-btn'>Checkout</button>
          </div>

        </div>
      </div>      
      <div className='your-order'>
        <span className='your-order-title'>Your order</span>
      </div>      
    </div>
  )
}
