import React, { useState } from "react";
import Popup_content from "./Popup_content.jsx";
import '../CSS/SideMenu.css';
import cogwheel_ico from '../art/cogwheel_ico.png';
import person_ico from '../art/person_ico.png';
import schedule_ico from '../art/schedule.png';

const SideMenu = () => {

    return(
        <div className="sidemenu-container">
            <img src={cogwheel_ico} className='wheel'/>
            <div className='list'>
                <ul>
                    <Popup_content path="./info" src={person_ico}/>
                    <Popup_content path="./training" src={schedule_ico}/>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu;