import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex w-full items-center justify-between">
            <img className="invert w-32" src="logo.png" alt="" />
            <input placeholder="Search Your Destination" className="placeholder:text-white bg-blend-darken px-4 py-2 text-white bg-transparent border-white border-2 rounded-full" type="text" />
            <div className="text-white nav-items py-2">
                <Link to={'/news'}>News</Link>
                <Link to={'/destination'}>Destination</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </nav>
    );
};

export default Header;