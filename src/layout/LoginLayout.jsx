import {Outlet} from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const LoginLayout = () => {
    return (
        <div className="static">
            <div className='bg-[url("1.png")] bg-auto min-h-screen'>
                <div className="mx-auto bg-black min-h-screen bg-opacity-50">
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;