import {Link} from "react-router-dom";

const Login = () => {


    return (
        <>
            <h1 className="text-5xl text-center font-bold text-white">Login now!</h1>
            <div className="w-96 mx-auto mt-10 mb-5 backdrop-blur-lg rounded-2xl border-2 border-white shadow-lg shadow-white p-8">
                <form>
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
                </form>
                <hr />
                <h1 className="text-white text-lg font-semibold text-center py-1">Or you can also log in with: </h1>
                <button className="mt-2 border-2 rounded-lg w-full text-center py-2 px-4 flex justify-center items-center hover:bg-sky-300 hover:bg-opacity-25 active:bg-opacity-50">
                    <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <h1 className="text-white pl-2 text-lg">Log in with Google</h1>
                </button>
                <button className="my-4 border-2 rounded-lg w-full text-center py-2 px-4 flex justify-center items-center hover:bg-sky-300 hover:bg-opacity-25 active:bg-opacity-50">
                    <img className="w-6" src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="" />
                    <h1 className="text-white pl-2 text-lg">Log in with Facebook</h1>
                </button>
                <hr />
                <h1 className="text-white text-center text-md font-semibold mt-4">If you new or dont have an ID, plz <Link to={'/register'} className="text-white link-hover">Sign Up</Link></h1>
            </div>
        </>
    );
};

export default Login;