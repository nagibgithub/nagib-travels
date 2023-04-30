import {Link} from "react-router-dom";

const Login = () => {


    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-white">Login now!</h1>
            <form className="w-96 mx-auto mt-10 mb-5 backdrop-blur-lg rounded-2xl border-2 border-white shadow-lg shadow-white p-8">
                <div className="form-control py-2">
                    <label ><span className="text-white">Email</span></label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control py-2">
                    <label ><span className="text-white">Password</span></label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label ><a href="#" className="text-white link-hover">Forgot password?</a></label>
                </div>
                <div className="form-control py-2">
                    <input className="btn btn-primary" type="submit" value="Log In" />
                </div>
                <h1 className="text-white text-center text-md font-semibold">If you new or dont have an ID, plz <Link to={'/register'} className="text-white link-hover">Sign Up</Link></h1>
            </form>
        </div>
    );
};

export default Login;