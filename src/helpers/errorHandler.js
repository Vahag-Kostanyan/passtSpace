import { errorAlert } from "./alert";

export const errorHandler = (error) => {
    let errorMessage = 'An unknown error occurred';

    switch (error.code) {
        case "auth/invalid-email":
            errorMessage = 'Invalid email address';
            break;
        case 'auth/email-already-in-use':
            errorMessage = 'Email already in use';
            break;
        case 'auth/user-not-found':
            errorMessage = 'User not found';
            break;
        case 'auth/missing-password':
            errorMessage = 'Incorrect password';
            break;             
        case 'auth/wrong-password':
            errorMessage = 'Incorrect password';
            break;
        case 'auth/invalid-credential':
            errorMessage = 'Invalid credentials';
            break;
        default:
            errorMessage = error.message;
    }

    errorAlert(errorMessage);
}