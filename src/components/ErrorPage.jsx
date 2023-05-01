import {Link, useRouteError} from "react-router-dom";

export default function ErrorPage () {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="mx-auto text-center flex flex-col justify-center items-center min-h-screen">
            <Link to={'/'}><button className="px-4 py-2 bg-sky-500 rounded-md text-white hover:bg-sky-600 active:bg-sky-700">Go to Nagib Travels Home Page</button></Link>
            <div >
                {/* <img className="w-96 mx-auto" src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif" alt="" /> */}
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="text-[#ff0000] text-9xl my-2 py-2 font-black tracking-wide">{error.status}</p>
                <p>
                    <i>{error.data}</i>
                    <br />
                    <i>Page is {error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}