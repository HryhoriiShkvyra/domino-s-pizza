import React from "react";
import './UserLeaveFeedback.scss';

const UserLeaveFeedback   = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'leave-feedback'? 'user-leave-feedback-active' : 'user-leave-feedback'}>
            user-leave-feedback
        </div>    
    );
};

export default UserLeaveFeedback;