import React from "react";
import './UserGroups.scss';

const UserGroups  = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'groups'? 'user-groups-active' : 'user-groups'}>
            <h1 className="user-title-tab">Groups</h1>
        </div>    
    );
};

export default UserGroups;