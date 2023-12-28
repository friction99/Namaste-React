import React from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/error.jsx";
import Contact from "./components/Contact.jsx";
import ResturantMenu from "./components/ResturantMenu.jsx";
import userData from "./utils/userDatat.js";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";
const AppLayout = ()=>{
    const [user,setUser] = useState("default");
    useEffect(()=>{
    const data = {
            name:"Aman"
        }
        setUser(data.name);
    },[]);
    return(
            <Provider store={appStore}>
                <userData.Provider value={{userName:user,setUser}}>
                    <div className="App">
                        <Header/>
                        <Outlet/>
                    </div>
                </userData.Provider>
            </Provider>
    )
}
const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body/>,
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/resturants/:resId",
                    element:<ResturantMenu/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                }
            ],
            errorElement:<Error/>
        }
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
