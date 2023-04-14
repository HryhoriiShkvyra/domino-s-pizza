import React from "react";
import './UserOrders.scss';
import img1 from '../../assets/user-order-ongoing-order.png'
import pizza_one from '../../assets/pizza.jpg';
import pizza_two from '../../assets/pizza_.jpg';
import ArchiveOrder from "../ArchiveOrder/ArchiveOrder";
 
const UserOrders  = ({activeTab}) => {

    const [activeOrderBtn, setActiveOrderBtn] = React.useState('ongoing');

    const [isDetails, setIsDetails] = React.useState(false);

    let ordersInArchive = true;


    const data = [
        {
            orderNumber: '1234567',
            orderTime: '12.12.2012,  12.12',
            address: 'City Kyiv, st.DRAGOMANOVA (POZNIAKY) STREET, 99 building ',
            phoneNumber: '1234567890987',
            summ: '222.22',
            orderStatus: 'complete',
            details : [{
                img: pizza_two,
                title: 'Pizza Provence',
                size: 'Large',
                crust: 'Thick crust',
                quantity: '1'
            },
            {
                img: pizza_two,
                title: 'Pizza Provence',
                size: 'Large',
                crust: 'Thick crust',
                quantity: '1'
            },
            {
                img: pizza_two,
                title: 'Pizza Provence',
                size: 'Large',
                crust: 'Thick crust',
                quantity: '1'
            },
            ]
            
        },
        {
            orderNumber: '2345678',
            orderTime: '11.11.2011,  11.11',
            address: 'City Kyiv, st.DRAGOMANOVA (POZNIAKY) STREET, 90 building ',
            phoneNumber: '2345678909878',
            summ: '111.11',
            orderStatus: 'complete',
            details : [{
                img: pizza_two,
                title: 'Pizza Provence',
                size: 'Large',
                crust: 'Thick crust',
                quantity: '1'
            },
            {
                img: pizza_two,
                title: 'Pizza Provence',
                size: 'Large',
                crust: 'Thick crust',
                quantity: '1'
            },
            {
                img: pizza_two,
                title: 'Pizza Provence',
                size: 'Large',
                crust: 'Thick crust',
                quantity: '1'
            },
            ]
        }
    ]



    return(
        <div className={activeTab === 'orders'? 'user-orders-active' : 'user-orders'}>
            <div className="user-orders-container">
                <h1 className="user-title-tab">Orders</h1>
                <div className="user-orders-btns">
                    <button className={activeOrderBtn === "ongoing" ? "user-orders-btn-active" : "user-orders-btn"}
                        onClick={() => setActiveOrderBtn('ongoing')}
                    >Ongoing</button>
                    <button className={activeOrderBtn === "archive" ? "user-orders-btn-active" : "user-orders-btn"}
                        onClick={() => setActiveOrderBtn('archive')}
                    >Archive</button>
                </div>
                
                <div className="user-orders-wrapper">
                    <div className={activeOrderBtn === 'ongoing' ? "user-orders-ongoing-order-no-current-orders-active" 
                        : "user-orders-ongoing-order-no-current-orders"
                    }>
                        <img className="user-orders-ongoing-order-no-current-orders-img" src={img1} alt="#"/>
                        <span className="user-orders-ongoing-order-no-current-orders-title" >You have no current orders</span>
                        <span className="user-orders-ongoing-order-no-current-orders-subtitle" >To see the list of current orders, you need to place an order</span>
                    </div>
                    
                    <div className={activeOrderBtn === 'archive' ? 'user-orders-archive-active' : 'user-orders-archive'}>
                        { ordersInArchive ? 
                            <div>
                                <div className="archive-order-description">
                                    <div className="archive-order-description-orderNumber">Order number</div>
                                    <div className="archive-order-description-orderTime">Order time</div>
                                    <div className="archive-order-description-address">Address</div>
                                    <div className="archive-order-description-phoneNumber">Phone number</div>
                                    <div className="archive-order-description-summ">Summ</div>
                                    <div className="archive-order-description-orderStatus">Order status</div>
                                </div>
                                {data.map((item) => (
                                    <ArchiveOrder key={item.orderNumber} item={item}/>
                                ))}

                                </div>
                                :
                                <div className="user-orders-archive-no-orders">
                                    <img className="user-orders-archive-no-orders-img" src={img1} alt="#"/>
                                    <span className="user-orders-archive-no-orders-title" >You don't have any completed orders yet</span>
                                <span className="user-orders-archive-no-orders-subtitle" >When you receive an order, you can view it here</span>
                            </div>
                        }
                    </div>
                </div> 
            </div>
        </div>    
    );
};

export default UserOrders;

