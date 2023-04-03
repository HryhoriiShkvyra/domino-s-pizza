import React from "react";
import './UserGroups.scss';

const UserGroups  = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'groups'? 'user-groups-active' : 'user-groups'}>
            user-groups
        </div>    
    );
};

export default UserGroups;