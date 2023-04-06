import React from "react";
import './UserMessages.scss';

const UserMessages  = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'messages'? 'user-messages-active' : 'user-messages'}>
            <h1 className="user-title-tab">Messages</h1>
        </div>    
    );
};

export default UserMessages;