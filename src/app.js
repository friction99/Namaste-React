import React from "react"
import ReactDOM  from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/error.jsx";
import Contact from "./components/Contact.jsx";
import ResturantMenu from "./components/ResturantMenu.jsx";
const AppLayout = ()=>{
    return(
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
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
                }
            ],
            errorElement:<Error/>
        }
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
