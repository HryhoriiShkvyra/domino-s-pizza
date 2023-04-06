import React from "react";
import './UserAddresses.scss';
import { Input } from "@mui/material";
// import Input from '../../UI/Input/Input';

const UserAddresses = ({activeTab}) => {
    
    return(
        <div className={activeTab === 'addresses'? 'user-addresses-active' : 'user-addresses'}>
            <h1 className="user-title-tab">Add addresses</h1>
            <div className="user-addresses-form">
                <div className="user-addresses-rows">
                    <>
                        <span className="user-addresses-title-input">Name*</span>
                        <Input className="user-addresses-value" placeholder='Enter Name'/>
                    </>
                    <>
                        <span className="user-addresses-title-input">City*</span>
                        <select className="user-addresses-select">
                            <option className="user-addresses-select-option" value='Kyiv'>Kyiv</option>
                            <option className="user-addresses-select-option" value='Lviv'>Lviv</option>
                            <option className="user-addresses-select-option" value='Ternopil'>Ternopil</option>
                        </select>
                    </>
                    
                </div>
                <div className="user-addresses-columns">
                    <div className="user-addresses-column">
                        <div className="user-addresses-column-item">
                            <span className="user-addresses-title-input">Street*</span>
                            <Input/>
                        </div>
                        <div className="user-addresses-column-item">
                            <span className="user-addresses-title-input">House number*</span>
                            <Input/>
                        </div>
                        <div className="user-addresses-column-item">
                            <span className="user-addresses-title-input">Entrance*</span>
                            <Input/>
                        </div>                       
                    </div>
                    <div className="user-addresses-column">
                        <div className="user-addresses-column-item">
                            <span className="user-addresses-title-input">Floor</span>
                            <Input/>
                        </div>
                        <div className="user-addresses-column-item">
                            <span className="user-addresses-title-input">Apartment</span>
                            <Input/>
                        </div>
                        <div className="user-addresses-column-item">
                            <span className="user-addresses-title-input">Door code</span>
                            <Input/>
                        </div>
                    </div>
                </div>
                <button className="user-addresses-btn">Save</button>
            </div>
        </div>    
    );
};

export default UserAddresses;
