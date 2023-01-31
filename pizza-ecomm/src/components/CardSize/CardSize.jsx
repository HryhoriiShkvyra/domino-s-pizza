import React from 'react';
// import useFetch from '../Hooks/useFetch';
import './CardSize.scss';


export default function CardSize({item, type, cathegory, isCrust, setIsCrust, isSize, setIsSize}) {
    

  return (
    <div>
        { cathegory === 'pizza' ?
            <div className='card-size'>
                <div className='card-block-size'>
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
                :

            null

        }


        {(() => {
            if (cathegory === 'sides') {
                if (item.attributes.size_2 === 'Double') {
                    return (
                    <div className='card-else-btn'>
                        <button onClick={() => setIsSize('standard')} 
                            className={isSize === 'standard' ? 'card-size-btn-active' : 'card-size-btn'}
                        >
                            {item.attributes.size_1}
                        </button>
                        
                        <button onClick={() => setIsSize('double')} 
                            className={isSize === 'double' ? 'card-size-btn-active' : 'card-size-btn'}
                        >
                            {item.attributes.size_2}
                        </button>
                    </div>
                    )
                } else {
                    return(
                        <div  className='card-else-btn'>
                            <button className='card-size-btn-active'>
                                {item.attributes.size_1}
                            </button>
                        </div>
                    )
                    
                }
            } else {
            }
        })()}
       
            
                                 
    </div>
  )
}
