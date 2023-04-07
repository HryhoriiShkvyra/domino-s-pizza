import React from "react";
import './UserBankCards.scss';
import { AddCircleOutline, CreditCardTwoTone } from "@mui/icons-material";

const UserBankCards = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'bank-cards'? 'user-bank-card-active' : 'user-bank-card'}>
            <h1 className="user-title-tab">Bank cards</h1>
            <span className="user-card-col">Add card:</span>
            <div className="bank-card-add-card">
                <div className="bank-card-add-card-btn">
                    <div className="bank-card-add-card-debit">
                        <CreditCardTwoTone/>
                        <span>Debit/credit card</span>
                    </div>
                    <div className="bank-card-add-card-add">
                        <AddCircleOutline/>
                        <span>Add card</span>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default UserBankCards;