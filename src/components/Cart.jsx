import { useDispatch, useSelector } from "react-redux";
import ListData from "./ListData";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const data = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const onclickhandle = ()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold">Cart</h1>
            <button className="border border-black bg-black text-white p-2 rounded-lg my-4"
            onClick={onclickhandle}>Clear Cart</button>
            <ListData items={data}/>
        </div>
    )
}
export default Cart;