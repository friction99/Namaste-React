import React from "react";
import RestCard from "./RestCard";
import { useState } from "react";
import data from "../utils/mockdata";
const Body = () => {
    const [listOfResturants,setlistOfResturant] = useState(data);
    return (
        <div className="body">
            <div className="Filter">{/*This is a comment*/}
                <button onClick={()=>{
                    const filteredData=listOfResturants.filter((res)=>res.avgRating>4);
                    setlistOfResturant(filteredData);
                }}>Top Rated Resturant</button>
            </div>
            <div className="res-cards">
                {
                    listOfResturants.map((resturant)=> (
                        <RestCard key = {resturant.id} resData={resturant}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Body;