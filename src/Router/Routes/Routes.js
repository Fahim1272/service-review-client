import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceRoute from "../../Pages/ServiceRoute/ServiceRoute";
import ServiceCardDetails from "../../Pages/Services/ServiceCardDetails";
import Register from "../../Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:< ServiceRoute></ServiceRoute>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/reviews',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/services/:id',
                element:<ServiceCardDetails></ServiceCardDetails>,
                loader:({ params }) =>fetch(` https://service-review-server-navy-nine.vercel.app/${[params.id]}`)

            },

        ]
    }
]);
export default router;