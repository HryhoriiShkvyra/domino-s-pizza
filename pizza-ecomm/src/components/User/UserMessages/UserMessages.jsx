import React from "react";
import './UserMessages.scss';

const UserMessages  = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'messages'? 'user-messages-active' : 'user-messages'}>
            user-messages
        </div>    
    );
};

export default UserMessages;