import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import ServiceRoute from "../../Pages/ServiceRoute/ServiceRoute";

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
            }
        ]
    }
]);
export default router;