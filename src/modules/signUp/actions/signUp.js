import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignUpReducerTypes } from "../utils";
import { auth } from "../../../fierbase.config";
import { errorHandler } from "../../../helpers/errorHendler";
import { successAlert } from "../../../helpers/alert";

export const signUpAction = (e, state) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, state.email, state.password)
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
        case SignUpReducerTypes.SET_EMAIL:
            return {...state, email: action.payload.email};
        case SignUpReducerTypes.SET_PASSWORD:
            return {...state, password: action.payload.password};
        default:
            return state
    }
}