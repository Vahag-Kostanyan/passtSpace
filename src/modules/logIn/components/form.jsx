import Input from "../ui/input";
import PrivacyPolicy from "../../../ui/privacyPolicy";
import ContinueWithGoogle from '../../../ui/continueWithGoogle';
import AuthButton from "../../../ui/authButton";
import SignUpLink from "../ui/signUpLink";
import { logInAction, logInWithGitHubAction, logInWithGoogleAction, reducer } from "../actions/logIn";
import { useReducer } from "react";
import { LogInReducerTypes } from "../utils";
import ContinueWithGitHub from "../../../ui/continueWithGitHub";


const Form = () => {
    const [state, dispatch] = useReducer(reducer, { email: '', password: '' });

    return (
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Log In
                </h1>
                <div className="w-full flex-1 mt-8">

                    <div className="flex flex-col items-center gap-2">
                        <ContinueWithGoogle action={() => logInWithGoogleAction()} />
                        <ContinueWithGitHub action={() => logInWithGitHubAction()} />
                    </div>

                    <div className="my-12 border-b text-center">
                        <div
                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or Log In with e-mail
                        </div>
                    </div>

                    <form onSubmit={(e) => logInAction(e, state)} className="mx-auto max-w-xs">

                        <div className="flex gap-4 flex-col">
                            <Input
                                value={state.email}
                                action={(e) => dispatch({ type: LogInReducerTypes.SET_EMAIL, payload: { email: e.target.value } })}
                                type="email" placeholder="Email"
                            />
                            <Input
                                value={state.password}
                                action={(e) => dispatch({ type: LogInReducerTypes.SET_PASSWORD, payload: { password: e.target.value } })}
                                type="password" placeholder="Password"
                            />
                        </div>

                        <AuthButton text="Log In" />

                        <PrivacyPolicy />

                        <SignUpLink />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;