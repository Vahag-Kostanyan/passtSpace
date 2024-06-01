import Picture from "./components/picture";
import Form from "./components/form";

const LoginModule = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <Form/>
                <Picture/>
            </div>
        </div>
    )
}

export default LoginModule;