import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignUpReducerTypes } from "../utils";
import { auth } from "../../../fierbase.config";

export const signUpAction = (e, state) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, state.email, state.password)
    .then(res => {
        location.assign('/')
    })
    .catch(error => {
        console.log(error);
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