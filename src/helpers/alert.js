import toast from "react-hot-toast"

export const successAlert = (message) => {
    toast.success(message);   
}


export const errorAlert = (message) => {
    toast.error(message);   
}

export const serverErrorAlert = () => {
    toast.error('Something want wrong please connect with sport!');   
}