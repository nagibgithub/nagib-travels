import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";
import {GoogleAuthProvider} from "firebase/auth";

const Login = () => {

    const {googleLogIn} = useContext(AuthContext);

    const [show, setShow] = useState(false)

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const googleLoginHandler = () => {
        googleLogIn()
    }

    return (
        <>
            <h1 className="text-5xl text-center font-bold text-white">Login now!</h1>
            <div className="w-96 mx-auto mt-10 mb-5 backdrop-blur-lg rounded-2xl border-2 border-white shadow-lg shadow-white p-8">
                <form onSubmit={handleLogIn}>
                    <div className="form-control py-2">
                        <label ><span className="text-white">Email</span></label>
                        <input name="email" type="email" placeholder="email" autoComplete="username" className="input-field" required />
                    </div>
                    <div className="form-control py-2">
                        <label ><span className="text-white">Password <FontAwesomeIcon icon={show ? faEye : faEyeSlash}></FontAwesomeIcon></span></label>
                        <input name="password" type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="password" className="input-field" required />
                        <div onClick={() => setShow(!show)} className="text-white cursor-pointer my-2 w-max">{show ? "Hide" : "Show"} Password</div>
                        <label ><a href="#" className="text-white link-hover">Forgot password?</a></label>
                    </div>
                    <div className="form-control py-2">
                        <input className="btn btn-primary" type="submit" value="Log In" />
                    </div>
                </form>
                <hr />
                <h1 className="text-white text-lg font-semibold text-center py-1">Or you can also log in with: </h1>
                <button onClick={googleLoginHandler} className="google-signin-button">
                    <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <h1 className="text-white pl-2 text-lg">Log in with Google</h1>
                </button>
                <button className="google-signin-button">
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