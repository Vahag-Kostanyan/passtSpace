import { updatePassword } from "firebase/auth";
import { successAlert } from "../../../helpers/alert"
import { errorHandler } from "../../../helpers/errorHandler";

export const changePassword = (e, state, user) => {
    e.preventDefault()
    
    updatePassword(user, state.newPassword).then(res => {
        successAlert('Password changed successfully');
    })
    .catch(error => {
        errorHandler(error);
    })
}

