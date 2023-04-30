import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-white">Sign Up in Nagib Travels...!</h1>
            <form className="w-96 mx-auto mt-10 mb-5 backdrop-blur-lg rounded-2xl border-2 border-white shadow-lg shadow-white p-8">
                <div className="form-control py-2">
                    <label><span className="text-white">Full Name</span></label>
                    <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required/>
                </div>
                <div className="form-control py-2">
                    <label><span className="text-white">Email</span></label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required/>
                </div>
                <div className="form-control py-2">
                    <label><span className="text-white">Password</span></label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required/>
                </div>
                <div className="form-control py-2">
                    <label><span className="text-white">Confirm Password</span></label>
                    <input name="confirm" type="password" placeholder="password" className="input input-bordered" required/>
                </div>
                <div className="form-control py-2">
                    <input name="submit" className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
                <h1 className="text-white text-center text-md font-semibold">If you have an ID, plz <Link to={'/login'} className="text-white link-hover">Log In</Link></h1>
            </form>
        </div>
    );
};

export default SignUp;