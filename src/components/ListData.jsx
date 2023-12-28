import { addItems } from "../utils/cartSlice";
import { FOOD_URL } from "../utils/constants";
import {useDispatch} from "react-redux"
const ListData = (props)=>{
    const arr = props.items;
    const dispatch = useDispatch();
    const handler = (data)=>{
       dispatch(addItems(data));
    }
    return(
        arr.map((data)=>{
            return(
                <div key={data.card.info.id} className="m-4 p-4 border flex justify-between">
                   <div className="w-9/12">
                        <span className="font-semibold">{data.card.info.name}</span><br></br>
                        <span>{(data.card.info.price)?("₹"+data.card.info.price/100):("₹"+data.card.info.defaultPrice/100)}</span>
                        <p>{data.card.info.description}</p>
                   </div>
                   <div className="w-3/12 ml-4 shadow-lg">
                        <div className="p-2 mx-20 my-32 rounded-lg shadow-lg bg-black text-white absolute">
                            <button onClick={()=>handler(data)}>Add +</button>
                        </div>
                        <img className="h-40" src={FOOD_URL+data.card.info.imageId}/>
                   </div>
                </div>
            )
        })
    )
};
export default ListData;