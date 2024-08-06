import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase.config";
import { errorHandler } from "../helpers/errorHandler";

export const getAndCheckUser = (setAuthUser) => {
    useEffect(() => {
        (() => {
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    location.assign('/login');
                }
                setAuthUser(user);
            })
        })();
    }, []);
}

export const userSignOut = () => {
    signOut(auth)
        .then(() => {
            location.assign('/login');
        })
        .catch(error => {
            errorHandler(error)
        });
}
