import {createContext} from "react";
import {app} from "../firebase/firebase.config";
import {getAuth} from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth(app)

console.log(auth);
const AuthProvider = () => {

    return (
        <div>
            fuad
        </div>
    );

};

export default AuthProvider;