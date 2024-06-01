import Input from "../ui/input";
import PrivacyPolicy from "../../../ui/privacyPolicy";
import ContinueWithGoogle from '../../../ui/continueWithGoogle';
import AuthButton from "../../../ui/authButton";
import LoginLink from "../ui/loginLink";
import { useReducer } from "react";
import { reducer, signUpAction } from "../actions/signUp";
import { SignUpReducerTypes } from "../utils";

const Form = () => {
    const [state, dispatch] = useReducer(reducer, { email: '', password: '' });


    return (
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Sign up
                </h1>
                <div className="w-full flex-1 mt-8">

                    <div className="flex flex-col items-center">
                        <ContinueWithGoogle />
                    </div>

                    <div className="my-12 border-b text-center">
                        <div
                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or sign up with e-mail
                        </div>
                    </div>

                    <form onSubmit={(e) => signUpAction(e, state)} className="mx-auto max-w-xs">

                        <div className="flex gap-4 flex-col">
                            <Input
                                value={state.email}
                                action={(e) => dispatch({ type: SignUpReducerTypes.SET_EMAIL, payload: { email: e.target.value } })}
                                type="email" placeholder="Email"
                            />
                            <Input
                                value={state.password}
                                action={(e) => dispatch({ type: SignUpReducerTypes.SET_PASSWORD, payload: { password: e.target.value } })}
                                type="password" placeholder="Password"
                            />
                        </div>

                        <AuthButton
                            text="Sign Up"
                        />

                        <PrivacyPolicy />

                        <LoginLink />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;