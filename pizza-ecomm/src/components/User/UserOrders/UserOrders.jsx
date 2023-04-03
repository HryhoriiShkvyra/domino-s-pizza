import React from "react";
import './UserOrders.scss';

const UserOrders  = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'orders'? 'user-orders-active' : 'user-orders'}>
            user-orders
        </div>    
    );
};

export default UserOrders;