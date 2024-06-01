import { signInWithEmailAndPassword  } from "firebase/auth";
import { LogInReducerTypes } from "../utils";
import { auth } from "../../../fierbase.config";

export const logInAction = (e, state) => {
    e.preventDefault();
        console.log(state);
    signInWithEmailAndPassword(auth, state.email, state.password)
    .then(res => {
        location.assign('/')
    })
    .catch(error => {
        console.log(error);
    })
}

export const reducer = (state, action) => {
    switch (action.type) {
        case LogInReducerTypes.SET_EMAIL:
            return {...state, email: action.payload.email};
        case LogInReducerTypes.SET_PASSWORD:
            return {...state, password: action.payload.password};
        default:
            return state
    }
}