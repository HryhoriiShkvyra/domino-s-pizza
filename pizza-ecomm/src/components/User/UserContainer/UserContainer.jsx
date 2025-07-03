import React from "react";
import "./UserContainer.scss";
import NavbarSecond from "../../Navbar/NavbarSecond";
import UserNavBar from "../UserNavBar/UserNavBar";
import UserProfile from "../UserProfile/UserProfile";
import UserAddresses from "../UserAddresses/UserAddresses";
import UserBankCards from "../UserBankCards/UserBankCards";
import UserGroups from "../UserGroups/UserGroups";
import UserLeaveFeedback from "../UserLeaveFeedback/UserLeaveFeedback";
import UserMessages from "../UserMessages/UserMessages";
import UserOrders from "../UserOrders/UserOrders";

const UserContainer = () => {
  const [activeTab, setActiveTab] = React.useState("profile");

  return (
    <div className="user-container">
      <NavbarSecond />
      {activeTab === "profile" ? (
        <div className="user-profile-bonus-wrapper">
          <span className="user-profile-bonus-col">
            Bonuses available: 0 bonuses
          </span>
          <span className="user-profile-bonus-col">
            Bonuses spent: 79 bonuses
          </span>
          <span className="user-profile-bonus-col">
            Bonuses can be used for 42 days from the date of accrual
          </span>
        </div>
      ) : null}

      <div className="user-container-wrapper">
        <UserNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
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
