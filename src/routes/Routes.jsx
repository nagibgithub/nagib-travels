import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className='h-screen flex justify-center items-center bg-slate-400 text-5xl font-bold'>Hello world!</div>,
    },
]);

export default router