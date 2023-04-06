import React from "react";
import './UserOrders.scss';
import img1 from '../../assets/user-order-ongoing-order.png'

const UserOrders  = ({activeTab}) => {

    const [activeOrderBtn, setActiveOrderBtn] = React.useState('ongoing');

    console.log(activeOrderBtn)
    
    return(
        <div className={activeTab === 'orders'? 'user-orders-active' : 'user-orders'}>
            <div className="user-orders-wrapper">
                <h1 className="user-title-tab">Profile</h1>
                <div className="user-orders-btns">
                    <button className={activeOrderBtn === "ongoing" ? "user-orders-btn-active" : "user-orders-btn"}
                        onClick={() => setActiveOrderBtn('ongoing')}
                    >Ongoing</button>
                    <button className={activeOrderBtn === "archive" ? "user-orders-btn-active" : "user-orders-btn"}
                        onClick={() => setActiveOrderBtn('archive')}
                    >Archive</button>
                </div>
                <div className="user-orders-wrapper">
                    {
                        activeOrderBtn === "ongoing" 
                        ? 
                        <div className="user-orders-ongoing-order-no-current-orders">
                            <img className="user-orders-ongoing-order-no-current-orders-img" src={img1}/>
                            <span className="user-orders-ongoing-order-no-current-orders-title" >You have no current orders</span>
                            <span className="user-orders-ongoing-order-no-current-orders-subtitle" >To see the list of current orders, you need to place an order</span>
                        </div>
                        :
                        <div className="user-orders-ongoing-order-no-current-orders">
                            <img className="user-orders-ongoing-order-no-current-orders-img" src={img1}/>
                            <span className="user-orders-ongoing-order-no-current-orders-title" >You don't have any completed orders yet</span>
                            <span className="user-orders-ongoing-order-no-current-orders-subtitle" >When you receive an order, you can view it here</span>
                        </div>
                    }
                </div>
            </div>
        </div>    
    );
};

export default UserOrders;