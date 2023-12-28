import { useState } from "react";
import ListData from "./ListData";
const ListItems = (props)=>{
    const {showItems,method} = props;
    const {itemCards,title,id} = props.list;
    const handleClick = ()=>{
       method();
    }
    return(
       <div className="p-4 w-6/12 m-auto border bg-gray-50 shadow-md">
         <div className="flex justify-between">
            <span className="font-bold cursor-pointer" onClick={handleClick}>
            {title + "(" + itemCards.length + ")"}</span>
            <span>⬇️</span>
         </div>
         {showItems &&  <ListData key={id} items={itemCards}/>}
       </div>
    )
};
export default ListItems;