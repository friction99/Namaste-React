import React from "react";
import RestCard from "./RestCard";
import { useState,useEffect} from "react";
import data from "../utils/mockdata";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
const Body = () => {
    const [listOfResturants,setlistOfResturant] = useState([]);
    const [filteredRes,SetfilteredRes] = useState([]);
    const [query,setQuery] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
            const fetched = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.618423899727492&lng=85.11005479543813&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await fetched.json();
            setlistOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            SetfilteredRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(listOfResturants?.length===0){
        return <ShimmerUi/>;
    };
    return (
        <div className="body">
            <div className="Filter">{/*This is a comment*/}
                <input type="text" className="search-box" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
                <button className="search-button" onClick={
                    ()=>{
                        const searched = listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(query.toLowerCase()));
                        SetfilteredRes(searched);
                    }
                }>  Search </button>
                <button onClick={()=>{
                    const filteredData=listOfResturants.filter((res)=>res.info.avgRating>4);
                    SetfilteredRes(filteredData);
                }}>Top Rated Resturant</button>
            </div>
            <div className="res-cards">
                    {
                        filteredRes?.map((resturant)=> (
                            <Link to={"/resturants/"+resturant.info.id} key={resturant.info.id}> <RestCard resData={resturant.info}/></Link>
                        ))
                    }
            </div>
        </div>
    )
};
export default Body;