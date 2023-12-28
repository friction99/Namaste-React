import React from "react";
import RestCard from "./RestCard";
import { useState,useEffect,useContext} from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import withPromotedLabel from "./withPromotedLabel";
import userData from "../utils/userDatat";
const Body = () => {
    const [listOfResturants,setlistOfResturant] = useState([]);
    const [filteredRes,SetfilteredRes] = useState([]);
    const [query,setQuery] = useState("");
    const Promoted = withPromotedLabel(RestCard);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
            const fetched = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6127307&lng=85.1109891&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await fetched.json();
            setlistOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            SetfilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const {userName,setUser} = useContext(userData);
    if(listOfResturants?.length===0){
        return <ShimmerUi/>;
    };
    return (
        <div className="body">
            <div className="flex">
                <div>
                    <input type="text" className="p-4 m-4 w-56 rounded-md border-2 border-cyan-400" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
                    <button className="px-4 py-2 rounded-lg bg-green-100 m-4" onClick={
                        ()=>{
                            const searched = listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(query.toLowerCase()));
                            SetfilteredRes(searched);
                        }
                    }>  Search </button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="px-4 py-2 rounded-lg bg-green-100 m-4" onClick={()=>{
                        const filteredData=listOfResturants.filter((res)=>res.info.avgRating>4);
                        SetfilteredRes(filteredData);
                    }}>Top Rated Resturant</button>
                </div>
                <div className="flex justify-center items-center">
                    <label className="mr-4">UserName</label>
                    <input className="border border-black" value={userName} onChange={(e)=>setUser(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                    {
                        filteredRes?.map((resturant)=> (
                            <Link to={"/resturants/"+resturant.info.id} key={resturant.info.id}> <Promoted resData={resturant.info}/></Link>
                        ))
                    }
            </div>
        </div>
    )
};
export default Body;