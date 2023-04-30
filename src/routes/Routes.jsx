import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/pages/Home";
import News from "../components/pages/News";
import Destination from "../components/pages/Destination";
import Blog from "../components/pages/Blog";
import Contact from "../components/pages/Contact";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/news",
                element: <News></News>
            },
            {
                path: "/destination",
                element: <Destination></Destination>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router