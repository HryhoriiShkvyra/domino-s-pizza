import React from "react";
import './UserProfile.scss';
import { Input } from "@mui/material";
// import Input from "../../UI/Input/Input";
import { QuestionMark } from "@mui/icons-material";

const UserProfile = ({activeTab}) => {

    const [activeTipEmail, setActiveTipEmail] = React.useState(false);
    const [activeTipPhone, setActiveTipPhone] = React.useState(false);
    

    return(
        <div className={activeTab === 'profile'? 'user-profile-active' : 'user-profile'}>
            <div className="user-profile-wrapper">
                <h1 className="user-title-tab">Profile</h1>

                <div className="user-profile-col">
                        Name
                        <Input className="user-profile-input" placeholder="enter name"/>
                </div>
                <div className="user-profile-col">
                        Middle Name
                        <Input className="user-profile-input" placeholder="enter middle name"/>
                </div>
                <div className="user-profile-col">
                        <div className="user-profile-more-info">
                            email
                            <QuestionMark className="additional-attribute"
                                onClick={() => setActiveTipEmail((activeTipEmail) => !activeTipEmail)}
                            />
                            <span className={activeTipEmail ? 'additional-info-tip-email-active' : 'additional-info-tip-email'}>With the help of your mail you will be able to receive detailed information about your order, as well as to restore the entrance to your personal account in case of loss of your phone number or its change.</span>
                        </div> 
                        <Input className="user-profile-input" placeholder="enter email"/>
                </div>
                <div className="user-profile-col">
                        <div className="user-profile-more-info">
                            Phone number
                            <QuestionMark className="additional-attribute" 
                                onClick={() => setActiveTipPhone((activeTipPhone) => !activeTipPhone)}
                            / >
                            <span className={activeTipPhone ? 'additional-info-tip-phone-active' : 'additional-info-tip-phone'}>Enter the phone number you will use to sign in later</span>

                        </div> 
                        <Input className="user-profile-input" placeholder="enter phone number"/>
                </div>
                <div className="user-profile-col">
                        Gender
                        <select className="user-profile-gender">
                        <option value='1'>Men</option>
                        <option value='2'>Women</option>
                    </select>                  </div>
                <div className="user-profile-col">
                        Date of birth
                        <div>02.07.2000</div>
                </div>
                <div className="user-profile-btns">
                    <button className="user-profile-btn-change-password">Change password</button>
                    <button className="user-profile-btn-save">Save</button>
                    <button className="user-profile-btn">Logout</button>
                    <button className="user-profile-btn">Delete Account</button>
                </div>
            </div>
            
        </div>
    );
};

export default UserProfile;