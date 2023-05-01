import {createContext} from "react";
import {app} from "../firebase/firebase.config";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import {FacebookAuthProvider} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {

    const googleLogIn = () => {
        signInWithPopup(auth, googleProvider);
    }

    const facebookLogin = () => {
        signInWithPopup(auth, facebookProvider);
    }

    const authInfo = {
        googleLogIn,
        facebookLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;