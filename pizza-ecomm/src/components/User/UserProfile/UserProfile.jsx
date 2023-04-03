import React from "react";
import './UserProfile.scss';
import { Input } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";

const UserProfile = ({activeTab}) => {
    

    return(
        <div className={activeTab === 'profile'? 'user-profile-active' : 'user-profile'}>
             <div className="user-profile-wrapper">
                <div className="user-profile-col">
                        Name
                        <Input placeholder="enter name"/>
                </div>
                <div className="user-profile-col">
                        Middle Name
                        <Input placeholder="enter middle name"/>
                </div>
                <div className="user-profile-col">
                        <div className="user-profile-more-info">
                            email
                            <QuestionMark className="additional-attribute"
                                // onClick={() => }
                            />
                        </div> 
                        <Input placeholder="enter email"/>
                </div>
                <div className="user-profile-col">
                        <div className="user-profile-more-info">
                            Phone number
                            <QuestionMark className="additional-attribute"
                                // onClick={() => }
                            />
                        </div> 
                        <Input placeholder="enter phone number"/>
                </div>
                <div className="user-profile-col">
                        Gender
                        <Input />
                </div>
                <div className="user-profile-col">
                        Date of birth
                        <div>up to date</div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;