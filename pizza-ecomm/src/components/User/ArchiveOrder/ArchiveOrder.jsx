import React from "react";
import './ArchiveOrder.scss';
import ArchiveOrderProduct from '../ArchiveOrderProduct/ArchiveOrderProduct';

const ArchiveOrder = ({item}) => { 
    
    const [isDetails, setIsDetails] = React.useState(false)


    return(
        <>
            <div className="archive-order-info">
                <div className="archive-order-info-orderNumber">{item.orderNumber}</div>
                <div className="archive-order-info-orderTime">{item.orderTime}</div>
                <div className="archive-order-info-address">{item.address}</div>
                <div className="archive-order-info-phoneNumber">{item.phoneNumber}</div>
                <div className="archive-order-info-summ">{item.summ}</div>
                <div className="archive-order-info-orderStatus">{item.orderStatus}</div>
                <button className="archive-order-info-btn"
                    onClick={()=> setIsDetails((prev) => !prev)}
                >Details</button>
            </div>
            <div className={ isDetails ? "archive-order-info-products-active" : "archive-order-info-products"}>
                 {item.details.map((item) => (
                    <ArchiveOrderProduct item={item}/>
                ))} 
            </div>
        </>
    );
};

export default ArchiveOrder;