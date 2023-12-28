import React, { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import {useState } from "react";
import { Link } from "react-router-dom";
import userData from "../utils/userDatat";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header = ()=>{
    const [text,setText]=useState("login");
    const data = useContext(userData);
    const {userName} = data;
    const itemData = useSelector((store)=>store.cart.items);
    return(
        <div className="flex justify-around shadow-md">
            <div className="Logo-container">
                 <img className ="w-56" src={IMG_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="mr-8 text-lg"><Link to="/">Home</Link></li>
                    <li className="mr-8 text-lg"><Link to="/about">About</Link></li>
                    <li className="mr-8 text-lg"><Link to="/contact">Contact</Link></li>
                    <li className="mr-8 text-lg"><Link to="/cart">Cart{"("+itemData.length+")"}</Link></li>
                    <li className="mr-8 text-lg">{userName}</li>
                    <button className="mr-8 text-lg"
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