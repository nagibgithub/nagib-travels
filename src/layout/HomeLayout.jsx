import {Outlet} from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import "./HomeLayout.css"

const HomeLayout = () => {
    return (
        <div className="static">
            <div style={{backgroundImage: `url(1.png)`}} className='bg-auto min-h-screen'>
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