import React from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

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
const AppLayout = ()=>{
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
