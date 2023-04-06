import React from "react";
import './UserBankCards.scss';

const UserBankCards = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'bank-cards'? 'user-bank-card-active' : 'user-bank-card'}>
            <h1 className="user-title-tab">Bank cards</h1>
        </div>    
    );
};

export default UserBankCards;