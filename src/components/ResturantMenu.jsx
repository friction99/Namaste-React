import React from "react";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const ResturantMenu = ()=>{
    const [Menu,setMenu]=useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async()=>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        setMenu(json?.data?.cards[0]?.card?.card?.info);
    }
    if(Menu===null){
        return <ShimmerUi/>
    }
    const {name,costForTwoMessage,cuisines,areaName} = Menu;
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>{cuisines.join(",")}</h2>
            <h2>{areaName}</h2>
        </div>
    )
}
export default ResturantMenu;