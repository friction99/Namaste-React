import React from "react";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import ListItems from "./ListItems";
const ResturantMenu = ()=>{
    const [Menu,setMenu]=useState(null);
    const [showIndex,setShowIndex] = useState(null);
    const ToggleHandler = (index)=>{
        setShowIndex((prevIndex)=>{
            return (prevIndex===index)?null:index
        });
    }
    const {resId} = useParams();
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async()=>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setMenu(json?.data?.cards);
    }
    if(Menu===null){
        return <ShimmerUi/>
    }
    const topdata = Menu[0]?.card?.card?.info
    const middleData = Menu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items)=>
        items?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    const {name,costForTwoMessage,cuisines,areaName} = topdata;
    return(
        <div>
            <div className="w-6/12 m-auto px-4 my-8 text-lg border bg-gray-50 shadow-md">
                <h1 className="text-xl font-medium">{name}</h1>
                <h2>{costForTwoMessage}</h2>
                <h2>{cuisines.join(",")}</h2>
                <h2>{areaName}</h2>
            </div>
            {
                middleData.map(
                    (data,index)=>{
                        return <ListItems key={index} list={data.card.card} showItems={showIndex===index} method={()=>ToggleHandler(index)}/>
                    }
                )
            }
        </div>
    )
}
export default ResturantMenu;