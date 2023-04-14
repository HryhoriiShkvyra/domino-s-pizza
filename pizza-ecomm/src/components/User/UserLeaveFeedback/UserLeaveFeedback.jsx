import React from "react";
import './UserLeaveFeedback.scss';
import { StarRateRounded } from "@mui/icons-material";
import { Input } from "@mui/material";

const UserLeaveFeedback   = ({activeTab}) => {

    const [activeStarOne, setActiveStarOne] = React.useState(true)
    const [activeStarTwo, setActiveStartTwo] = React.useState(false)
    const [activeStarThree, setActiveStartThree] = React.useState(false)
    const [activeStarFour, setActiveStartFour] = React.useState(false)
    const [activeStarFive, setActiveStartFive] = React.useState(false)

    function activeOneStarFunc () {
        setActiveStarOne(true);
        setActiveStartTwo(false);
        setActiveStartThree(false);
        setActiveStartFour(false);
        setActiveStartFive(false);
    }

    function activeTwoStarsFunc () {
        setActiveStarOne(true);
        setActiveStartTwo(true);
        setActiveStartThree(false);
        setActiveStartFour(false);
        setActiveStartFive(false);
    }

    function activeThreeStarsFunc () {
        setActiveStarOne(true);
        setActiveStartTwo(true);
        setActiveStartThree(true);
        setActiveStartFour(false);
        setActiveStartFive(false);
    }

    function activeFourStarsFunc () {
        setActiveStarOne(true);
        setActiveStartTwo(true);
        setActiveStartThree(true);
        setActiveStartFour(true);
        setActiveStartFive(false);
    }

    function activeFiveStarsFunc () {
        setActiveStarOne(true);
        setActiveStartTwo(true);
        setActiveStartThree(true);
        setActiveStartFour(true);
        setActiveStartFive(true);
    }
    

    return(
        <div className={activeTab === 'leave-feedback'? 'user-leave-feedback-active' : 'user-leave-feedback'}>
            <h1 className="user-leave-feedback-container">
                <div className="user-leave-feedback-stars">
                    <StarRateRounded onClick={() => activeOneStarFunc()} 
                        className='user-leave-feedback-star-active'
                    />
                    <StarRateRounded onClick={() => activeTwoStarsFunc()}
                        className={activeStarTwo === true ? 'user-leave-feedback-star-active' : 'user-leave-feedback-star-not-active'}

                    />
                    <StarRateRounded onClick={() => activeThreeStarsFunc()}
                        className={activeStarThree === true ? 'user-leave-feedback-star-active' : 'user-leave-feedback-star-not-active'}
                    />
                    <StarRateRounded onClick={() => activeFourStarsFunc()}
                        className={activeStarFour === true ? 'user-leave-feedback-star-active' : 'user-leave-feedback-star-not-active'}
                    />
                    <StarRateRounded onClick={() => activeFiveStarsFunc()}
                        className={activeStarFive === true ? 'user-leave-feedback-star-active' : 'user-leave-feedback-star-not-active'}
                    />
                </div>
                <span className="user-leave-feedback-rate-us">Rate Us!</span>
                <div className="user-leave-feedback-info">
                    <div className="user-leave-feedback-cols">
                        <div className="user-leave-feedback-col">
                            <span className="user-leave-feedback-title-input">City*</span>
                            <select className="user-leave-feedback-select">
                                <option className="user-leave-feedback-select-option" value='Kyiv'>Kyiv</option>
                                <option className="user-leave-feedback-select-option" value='Lviv'>Lviv</option>
                                <option className="user-leave-feedback-select-option" value='Ternopil'>Ternopil</option>
                            </select>
                        </div>
                        <div className="user-leave-feedback-col">
                            <span className="user-leave-feedback-title-input">Feedback Category*</span>
                            <select className="user-leave-feedback-select">
                                <option className="user-leave-feedback-select-option" value='pizzeria staff'>The work of the pizzeria staff</option>
                                <option className="user-leave-feedback-select-option" value='order information'>Call center operator work/ order information</option>
                                <option className="user-leave-feedback-select-option" value='quality and delivery time'>Quality and delivery time</option>
                            </select>
                        </div>
                        <div className="user-leave-feedback-col">
                            <span className="user-leave-feedback-title-input">Phone*</span>
                            <Input className="user-leave-feedback-input" placeholder="Phone number"/>
                        </div>
                        <div className="user-leave-feedback-col">
                            <span className="user-leave-feedback-title-input">Email*</span>
                            <Input className="user-leave-feedback-input" placeholder="Email"/>
                        </div>
                        <div className="user-leave-feedback-col">
                            <span className="user-leave-feedback-title-input">Feedback</span>
                            <Input className="user-leave-feedback-input" type="text" placeholder="Feedback"/>
                        </div>
                        <div className="user-leave-feedback-col">
                            <span className="user-leave-feedback-title-input">Video link</span>
                            <Input className="user-leave-feedback-input" type="text" placeholder="Video link"/>
                        </div>
                        <div role="button" className="user-leave-feedback-col">
                            <div>Add file:</div>
                            <label for="file-upload" className="user-leave-feedback-upload-btn">
                                <input id="file-upload" type="file" className="user-leave-feedback-file-upload"/>
                                <span className="user-leave-feedback-upload-btn-text-one">Drag the file here or 
                                    <span className="user-leave-feedback-file-update-text-blue">Upload</span>
                                </span>
                                <span className="user-leave-feedback-upload-btn-text-two">PNG, JPEG, JPG files, up to 5mb for image.</span>

                            </label>
                        </div>
                        <div className="user-leave-feedback-captcha">
                            here must be captcha
                        </div>
                        <button className="user-leave-feedback-send-btn">Send</button>
                    </div>
                </div>
            </h1>

        </div>    
    );
};

export default UserLeaveFeedback;