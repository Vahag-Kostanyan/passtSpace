import Input from "../ui/input";
import PrivacyPolicy from "../../../ui/privacyPolicy";
import ContinueWithGoogle from '../../../ui/continueWithGoogle';
import AuthButton from "../../../ui/authButton";
import SignUpLink from "../ui/signUpLink";


const Form = () => {
    return (
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Log In
                </h1>
                <div className="w-full flex-1 mt-8">

                    <div className="flex flex-col items-center">
                        <ContinueWithGoogle />
                    </div>  

                    <div className="my-12 border-b text-center">
                        <div
                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or Log In with e-mail
                        </div>
                    </div>

                    <div className="mx-auto max-w-xs">

                        <div className="flex gap-4 flex-col">
                            <Input type="email" placeholder="Email" />
                            <Input type="password" placeholder="Password" />
                        </div>

                        <AuthButton text="Log In"/>

                        <PrivacyPolicy/>
                        
                        <SignUpLink/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;