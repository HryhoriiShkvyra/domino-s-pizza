import React from "react";
import './UserNavBar.scss';

const UserNavBar = ({activeTab, setActiveTab}) => {


    return(
        <div className="user-navbar">
            <div className="user-navbar-links">
                <div className={activeTab === 'profile' ? 'user-link-active' : 'user-link'} 
                    onClick={() => setActiveTab('profile')}
                >Profile</div>
                <div className={activeTab === 'groups' ? 'user-link-active' : 'user-link'} 
                    onClick={() => setActiveTab('groups')}
                >Groups</div>
                <div className={activeTab === 'addresses' ? 'user-link-active' : 'user-link'} 
                    onClick={() => setActiveTab('addresses')}
                >Addresses</div>
                <div className={activeTab === 'orders' ? 'user-link-active' : 'user-link'} 
                    onClick={() => setActiveTab('orders')}
                >Orders</div>
                <div className={activeTab === 'bank-cards' ? 'user-link-active' : 'user-link'} 
                    onClick={() => setActiveTab('bank-cards')}
                >Bank Cards</div>
                <div className={activeTab === 'leave-feedback' ? 'user-link-active' : 'user-link'} 
                    onClick={() => setActiveTab('leave-feedback')}
                >Leave Feedback</div>
                <div className={activeTab === 'messages' ? 'user-link-active' : 'user-link'} 
                    onClick={() => setActiveTab('messages')}
                >Messages</div>
            </div>
        </div>
    );
};

export default UserNavBar;