import React from "react";
import RestCard from "./RestCard";
import { useState,useEffect} from "react";
import data from "../utils/mockdata";
const Body = () => {
    const [listOfResturants,setlistOfResturant] = useState(data);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
        const fetched = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.618423899727492&lng=85.11005479543813&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetched.json();
        setlistOfResturant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    };
    return (
        <div className="body">
            <div className="Filter">{/*This is a comment*/}
                <button onClick={()=>{
                    const filteredData=listOfResturants.filter((res)=>res.info.avgRating>4);
                    setlistOfResturant(filteredData);
                }}>Top Rated Resturant</button>
            </div>
            <div className="res-cards">
                {
                    listOfResturants.map((resturant)=> (
                        <RestCard key = {resturant.info.id} resData={resturant.info}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Body;