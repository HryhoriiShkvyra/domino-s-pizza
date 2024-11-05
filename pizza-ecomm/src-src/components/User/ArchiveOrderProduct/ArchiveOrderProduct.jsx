import React from "react";
import './ArchiveOrderProduct.scss';

const ArchiveOrderProduct = ({item}) => {
    return(
        <div className='archive-order-product'>
            <img className=" archive-order-product-img" 
            src={item.img} alt="#"
            />
            <div className="archive-order-product-text">
                <div className="archive-order-product-title">{item.title}</div>
                <div className="archive-order-cols">
                    <div className="archive-order-product-col">
                        <div className="archive-order-product-size">Size</div>
                        <span className="archive-order-product-used-size">{item.size}</span>
                    </div>

                    <div className="archive-order-product-col">
                        <div className="archive-order-product-size">cCrust</div>
                        <span className="archive-order-product-used-size">{item.crust}</span>
                    </div>
                    <div className="archive-order-product-col">
                        <div className="archive-order-product-size">Q-ty</div>
                        <span className="archive-order-product-used-size">{item.quantity}</span>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default ArchiveOrderProduct;