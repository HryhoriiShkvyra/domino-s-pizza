import React from 'react';
import './CardSize.scss';


export default function CardSize({item}) {


    const [isSize, setIsSize] = React.useState('standard-size')
    const [isCrust, setIsCrust] = React.useState('thick')
    // const SizeValue = [isSize, isCrust] 
    // let isPrice = '0'

    // const list = {productListPizzaBestPrice};
    // console.log(' list ===> ',list)

    // const products = list.productListPizzaBestPrice;
    // console.log(' products ===> ', products)

    // const [count, setCount] = React.useState(0)

    // console.log(item)
    // const price_1 = item.attributes.price_1
    // const price_2 = item.attributes.price_2

  return (
    <div>
        <div className='card-size'>
            <div className='card-block-size'>
                {

                }
                <button onClick={() => setIsSize('standard-size')} 
                className={isSize === 'standard-size' ? 'card-size-btn-active' : 'card-size-btn'}>Standard  size</button>
                <div className='span'></div>
                <button onClick={() => setIsSize('large')} 
                className={isSize === 'large' ? 'card-size-btn-active' : 'card-size-btn'}>Large</button>
                <div className='span'></div>
                <button onClick={() => setIsSize('extra')} 
                className={isSize === 'extra' ? 'card-size-btn-active' : 'card-size-btn'}>ExtraLarge</button>
                <div className='span'></div>
                <button onClick={() => setIsSize('xxl')} 
                className={isSize === 'xxl' ? 'card-size-btn-active' : 'card-size-btn'}>XXLarge</button>
            </div>
            <div className='card-block-size-crust'>
                <button onClick={() => setIsCrust('thick')} 
                className={isCrust === 'thick' ? 'card-size-btn-active' : 'card-size-btn'}>Thick crust</button>
                <button onClick={() => setIsCrust('thin')} 
                className={isCrust === 'thin' ? 'card-size-btn-active' : 'card-size-btn'}>Thin</button>
                <button onClick={() => setIsCrust('philadelphia')} 
                className={isCrust === 'philadelphia' ? 'card-size-btn-active' : 'card-size-btn'}>Philadelphia</button>
                <button onClick={() => setIsCrust('hot-dog')} 
                className={isCrust === 'hot-dog' ? 'card-size-btn-active' : 'card-size-btn'}>Hot-Dog crust</button>
            </div>   

                                 
        </div>
    </div>
  )
}
