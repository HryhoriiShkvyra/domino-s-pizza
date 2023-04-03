import React from "react";
import './UserAddresses.scss';

const UserAddresses = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'addresses'? 'user-addresses-active' : 'user-addresses'}>
            user-addresses
        </div>    
    );
};

export default UserAddresses;