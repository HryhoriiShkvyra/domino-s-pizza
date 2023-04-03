import React from "react";
import './UserBankCards.scss';

const UserBankCards = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'bank-cards'? 'user-bank-card-active' : 'user-bank-card'}>
            user-bank-card
        </div>    
    );
};

export default UserBankCards;