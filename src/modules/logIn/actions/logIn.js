import { signInWithEmailAndPassword } from "firebase/auth";
import { LogInReducerTypes } from "../utils";
import { auth } from "../../../fierbase.config";
import { errorHandler } from "../../../helpers/errorHendler";
import { successAlert } from "../../../helpers/alert";

export const logInAction = (e, state) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, state.email, state.password)
        .then(res => {
            successAlert('Login successful');
            location.assign('/')
        })
        .catch(error => {
            errorHandler(error);
        })
}

export const reducer = (state, action) => {
    switch (action.type) {
        case LogInReducerTypes.SET_EMAIL:
            return { ...state, email: action.payload.email };
        case LogInReducerTypes.SET_PASSWORD:
            return { ...state, password: action.payload.password };
        default:
            return state
    }
}