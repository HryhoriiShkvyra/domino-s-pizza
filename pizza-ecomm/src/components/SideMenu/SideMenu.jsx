import { Cookie, KebabDining, LocalDrink, LocalPizza } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import './SideMenu.scss';


export const SideMenu = ({sideBarActive}) => {


    return(
        <>
        {sideBarActive === true 
            ?
                <div className="side-menu-active">
                <div className='first-part'>
                    <div className='first-part-btns'>
                        <Link className='first-part-btn'>
                            <div className='icon'><LocalPizza/></div>
                            <div className='btn-title'>Pizza</div>
                        </Link>
                        <Link className='first-part-btn'>
                            <div className='icon'><LocalDrink/></div>
                            <div className='btn-title'>Drinks</div>
                                                    
                        </Link>
                        <Link className='first-part-btn'>
                            <div className='icon'><KebabDining/></div>
                            <div className='btn-title'>Sides</div>
                        </Link>
                        <Link className='first-part-btn'>
                            <div className='icon'><Cookie/></div>
                            <div className='btn-title'>Dessert</div>
                        </Link>
                    </div>
                </div> 
                <div className='second-part'>
                    {/* <div className='additionalInfo'> */}
                        <Link className='infoBtn'>Pizza Constructor</Link>
                        <Link className='infoBtn'>Pizza Tracker</Link>
                        <Link className='infoBtn'>Pizzerias</Link>
                        <Link className='infoBtn'>News</Link>
                        <Link className='infoBtn'>Work and career</Link>
                        <Link className='infoBtn'>Franchise</Link>
                        <Link className='infoBtn'>Domino's Club</Link>
                        <Link className='infoBtn'>Leave feedback</Link>
                    {/* </div> */}
                </div>
            </div>
            :
            <div className="side-menu-deActive">
                <div className='first-part'>
                    <div className='first-part-btns'>
                        <Link className='first-part-btn'>
                            <div className='icon'><LocalPizza/></div>
                            <div className='btn-title'>Pizza</div>
                        </Link>
                        <Link className='first-part-btn'>
                            <div className='icon'><LocalDrink/></div>
                            <div className='btn-title'>Drinks</div>
                                                    
                        </Link>
                        <Link className='first-part-btn'>
                            <div className='icon'><KebabDining/></div>
                            <div className='btn-title'>Sides</div>
                        </Link>
                        <Link className='first-part-btn'>
                            <div className='icon'><Cookie/></div>
                            <div className='btn-title'>Dessert</div>
                        </Link>
                    </div>
                </div> 
                <div className='second-part'>
                    {/* <div className='additionalInfo'> */}
                        <Link className='infoBtn'>Pizza Constructor</Link>
                        <Link className='infoBtn'>Pizza Tracker</Link>
                        <Link className='infoBtn'>Pizzerias</Link>
                        <Link className='infoBtn'>News</Link>
                        <Link className='infoBtn'>Work and career</Link>
                        <Link className='infoBtn'>Franchise</Link>
                        <Link className='infoBtn'>Domino's Club</Link>
                        <Link className='infoBtn'>Leave feedback</Link>
                    {/* </div> */}
                </div>
            </div>
            }
        </>
            
        // <div>
        //     {/* {isOpenSideMenu ?  */}
        //         <div className='sideMenu'>
                    // <div className='partOne'>
                    //     <div className='partOneContent'>
                    //         <div className='sideMenuBtn'>
                    //                 <div className='icon'><i class="fa-solid fa-pizza-slice"></i></div>
                    //                 <div className='btnTitle'>Pizza</div>
                    //         </div>
                    //         <div className='sideMenuBtn'>
                    //             <div className='icon'><i class="fa-solid fa-bottle-water"></i></div>
                    //             <div className='btnTitle'>Drinks</div>
                                                        
                    //         </div>
                    //         <div className='sideMenuBtn'>
                    //             <div className='icon'><i class="fa-solid fa-bowl-food"></i></div>
                    //             <div className='btnTitle'>Sides</div>
                    //         </div>
                    //         <div className='sideMenuBtn'>
                    //             <div className='icon'><i class="fa-solid fa-cookie"></i></div>
                    //             <div className='btnTitle'>Desserts</div>
                    //         </div>
                    //     </div>        
        //             </div>
                    // <div className='partTwo'>
                    //     <div className='additionalInfo'>
                    //         <a className='infoBtn'>text</a>
                    //         <a className='infoBtn'>text</a>
                    //         <a className='infoBtn'>text</a>
                    //         <a className='infoBtn'>text</a>
                    //         <a className='infoBtn'>text</a>
                    //     </div>
                    // </div>
        //         </div>
        //     {/* : null */}
                
        //     {/* } */}
        // </div>
    );
};






