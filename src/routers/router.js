import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";


import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard.js/DashboardLayout";
import Dashboard from "../dashboard.js/Dashboard";
import UploadBook from "../dashboard.js/UploadBook";
import ManageBooks from "../dashboard.js/ManageBooks";
import EditBooks from "../dashboard.js/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";



const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            
            
           
            {
                path:"/book/:id",
                element:<SingleBook/>,
                loader: ({params})=>fetch(`https://book-backend-ny.onrender.com/book/${params.id}`)
            },
            

        ]
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/admin/dashboard",
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook/>
            },
            {
                path:"/admin/dashboard/manage",
                element:<ManageBooks/>
            },
            {
                path:"/admin/dashboard/edit-books/:id",
                element:<EditBooks/>,
                
            },
            {
                path:"/admin/dashboard/edit-books/:id",
                element:<EditBooks/>,
                
            }
        ]
    },{
        path:"sign-up",
        element:<Signup/>
    },{
        path:"login",
        element:<Login/>
    },
    
]);

export default router