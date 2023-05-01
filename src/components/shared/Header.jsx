import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, NavLink} from "react-router-dom";

const Header = () => {

    const navBar = [
        {id: 1, route: '/news', title: 'News'},
        {id: 2, route: '/destination', title: 'Destination'},
        {id: 3, route: '/blog', title: 'Blog'},
        {id: 4, route: '/contact', title: 'Contact'},
    ]


    return (
        <nav className="container mx-auto flex w-full items-center justify-between py-5">
            <Link to={"/"}><img className="invert w-32" src="logo.png" alt="" /></Link>
            <div className="bg-blend-darken px-4 py-2 text-white bg-white bg-opacity-25 border-white border-2 rounded-xl" >
                <FontAwesomeIcon icon={faMagnifyingGlass} /><input className="pl-4 placeholder:text-white bg-transparent outline-none w-96" placeholder="Search Your Destination" type="text" />
            </div>
            <div className="text-white nav-items py-2">
                {
                    navBar.map(nav => <NavLink className={({isActive, isPending}) =>
                        isActive
                            ? "bg-sky-500"
                            : isPending
                                ? "bg-gray-600"
                                : ""
                    } to={nav.route} key={nav.id}>{nav.title}</NavLink>)
                }
                <Link to={'/register'}><button className="px-4 py-2 bg-yellow-400 text-black rounded-md">Sign Up</button></Link>
            </div>
        </nav>
    );
};

export default Header;