import React from "react";
import { CDN_URL } from "../utils/constants";
import userData from "../utils/userDatat";
import { useContext } from "react";
const RestCard = (props)=>{
    const {userName} = useContext(userData);
    const {resData} = props;
    const {name,avgRating,cuisines,areaName} = resData;
    return(
        <div className="m-4 p-4 rounded-lg w-[300px] bg-slate-50 shadow-md hover:shadow-lg">
            <img className="rounded-lg" src={CDN_URL+resData.cloudinaryImageId} alt="food-img"/>
            <div className="container">
                <h4 className="font-bold py-2 text-lg">{name}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{cuisines.join(",")}</h4>
                <h4>{areaName}</h4>
                <h4>{userName}</h4>
            </div>
        </div>
    )
}
export default RestCard;