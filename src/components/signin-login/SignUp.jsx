import {Link} from "react-router-dom";

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }

    return (
        <>
            <h1 className="text-5xl text-center font-bold text-white">Sign Up in Nagib Travels...!</h1>
            <div className="w-96 mx-auto mt-10 mb-5 backdrop-blur-lg rounded-2xl border-2 border-white shadow-lg shadow-white p-8">
                <form onSubmit={handleSignUp}>
                    <div className="form-control py-2">
                        <label><span className="text-white">Full Name</span></label>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control py-2">
                        <label><span className="text-white">Email</span></label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" autoComplete="current-email" required />
                    </div>
                    <div className="form-control py-2">
                        <label><span className="text-white">Password</span></label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" autoComplete="new-password" required />
                    </div>
                    <div className="form-control py-2">
                        <label><span className="text-white">Confirm Password</span></label>
                        <input name="confirm" type="password" placeholder="password" className="input input-bordered" autoComplete="new-password" required />
                    </div>
                    <div className="form-control py-2">
                        <input name="submit" className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                    <h1 className="text-white text-center text-md font-semibold py-1">If you have an ID, plz <Link to={'/login'} className="text-white link-hover">Log In</Link></h1>
                </form>
                <hr />
                <h1 className="text-white text-lg font-semibold text-center py-1">Or you can also sign up with: </h1>
                <button className="mt-2 border-2 rounded-lg w-full text-center py-2 px-4 flex justify-center items-center hover:bg-sky-300 hover:bg-opacity-25 active:bg-opacity-50">
                    <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <h1 className="text-white pl-2 text-lg">Sign up with Google</h1>
                </button>
                <button className="mt-4 border-2 rounded-lg w-full text-center py-2 px-4 flex justify-center items-center hover:bg-sky-300 hover:bg-opacity-25 active:bg-opacity-50">
                    <img className="w-6" src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="" />
                    <h1 className="text-white pl-2 text-lg">Sign up with Facebook</h1>
                </button>
            </div>
        </>
    );
};

export default SignUp;