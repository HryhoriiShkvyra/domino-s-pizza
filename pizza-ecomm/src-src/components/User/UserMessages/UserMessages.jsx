import React from "react";
import './UserMessages.scss';

const UserMessages  = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'messages'? 'user-messages-active' : 'user-messages'}>
            <div className="user-messages-container">
                <div className="user-messages-no-messages">
                    You have no messages
                </div>
            </div>
        </div>    
    );
};

export default UserMessages;