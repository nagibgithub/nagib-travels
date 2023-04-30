import {Outlet} from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import "./HomeLayout.css"

const HomeLayout = () => {
    return (
        <div className="static">
            <div style={{backgroundImage: `url(1.png)`}} className='bg-cover min-h-screen brightness-50'></div>
            <div className="mx-auto absolute top-0 w-full py-3">
                <div className="container mx-auto">
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;