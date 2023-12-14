import React from "react";
import { IMG_URL } from "../utils/constants";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    const [text,setText]=useState("login");
    return(
        <div className="Header-container">
            <div className="Logo-container">
                 <img className ="img" src={IMG_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={()=>{
                        (text==="login")?setText("logout"):setText("login");
                    }}
                    >
                        {text}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;