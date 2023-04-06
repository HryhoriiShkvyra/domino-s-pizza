import React from "react";
import './UserLeaveFeedback.scss';

const UserLeaveFeedback   = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'leave-feedback'? 'user-leave-feedback-active' : 'user-leave-feedback'}>
            <h1 className="user-title-tab">Leave Feedback</h1>
        </div>    
    );
};

export default UserLeaveFeedback;