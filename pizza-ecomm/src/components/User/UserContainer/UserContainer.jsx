import React from "react";
import './UserContainer.scss';
import NavbarSecondPart from '../../Navbar/NavbarSecondPart';
import UserNavBar from '../UserNavBar/UserNavBar';
import UserProfile from "../UserProfile/UserProfile";
import UserAddresses from '../UserAddresses/UserAddresses';
import UserBankCards from '../UserBankCards/UserBankCards';
import UserGroups from '../UserGroups/UserGroups';
import UserLeaveFeedback from '../UserLeaveFeedback/UserLeaveFeedback';
import UserMessages from '../UserMessages/UserMessages';
import UserOrders from '../UserOrders/UserOrders'



const UserContainer = () => {

    const [activeTab, setActiveTab] = React.useState('profile')



    return(
        <div className="user-container">
            <NavbarSecondPart/>
            <div className="user-container-wrapper">
                <UserNavBar activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="user-tabs">
                    <UserProfile activeTab={activeTab} />
                    <UserAddresses activeTab={activeTab} />
                    <UserGroups activeTab={activeTab} />
                    <UserLeaveFeedback activeTab={activeTab} />
                    <UserMessages activeTab={activeTab} />
                    <UserOrders activeTab={activeTab} />
                    <UserBankCards activeTab={activeTab} />
                </div>
               
            </div>
        </div>
    );
};

export default UserContainer;