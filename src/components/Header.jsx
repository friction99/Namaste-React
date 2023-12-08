import React from "react";
import { IMG_URL } from "../utils/constants";
const Header = ()=>{
    return(
        <div className="Header-container">
            <div className="Logo-container">
                 <img className ="img" src={IMG_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;