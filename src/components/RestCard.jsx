import React from "react";
import { CDN_URL } from "../utils/constants";
const RestCard = (props)=>{
    const {resData} = props;
    const {name,avgRating,cuisines,areaName} = resData;
    return(
        <div className="cards">
            <img className="img" src={CDN_URL+resData.cloudinaryImageId} alt="food-img"/>
            <div className="container">
                <h4>{name}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{cuisines.join(",")}</h4>
                <h4>{areaName}</h4>
            </div>
        </div>
    )
}
export default RestCard;