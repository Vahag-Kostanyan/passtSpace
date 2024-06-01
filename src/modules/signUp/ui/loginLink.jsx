import { Link } from "react-router-dom";

const LoginLink = () => {
    return (
        <p className="mt-6 text-sm text-gray-600 text-center">
            Have an account?
            <Link to={'/login'} className="border-b ml-1 border-gray-500 border-dotted">
                Log in
            </Link>
        </p>
    );
}   

export default LoginLink;