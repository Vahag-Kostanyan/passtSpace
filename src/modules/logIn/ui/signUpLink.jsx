import { Link } from "react-router-dom";

const SignUpLink = () => {
    return (
        <p className="mt-6 text-sm text-gray-600 text-center">
            Don't have an account?
            <Link to={'/signUp'} className="border-b ml-1 border-gray-500 border-dotted">
                Sign Up
            </Link>
        </p>
    );
}   

export default SignUpLink;