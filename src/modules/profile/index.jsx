import { useState } from "react";
import AuthButton from "../../ui/authButton";
import Input from "../../ui/input";
import { getAndCheckUser, userSignOut } from "../../actions/currentUser";
import LogOutButton from "./ui/logOutButton";

const ProfileModule = () => {
    const [authUser, setAuthUser] = useState(null);

    getAndCheckUser((user) => setAuthUser(user));

    return (
        <div className="border-gray-200 bg-gray-50 bg-white shadow-2xl sm:rounded-lg flex gap-3 p-3" >
            <div className="shadow-2xl sm:rounded-lg p-2">
                <div className="flex rounded-full md:me-0 focus:ring-4 ">
                    <span className="sr-only">Avatar</span>
                    <img className="w-60 h-60 rounded-full" src="/avatar.png" alt="user photo" />
                </div>
                <div className="text-center">
                    {authUser?.email}
                </div>
                <LogOutButton action={userSignOut} />
            </div>


            <form className="max-w-sm mx-auto flex flex-col justify-center ">
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium">Password</label>
                    <Input type="password" id="password" placeholder="*******" required={true} />
                </div>
                <div className="mb-5">
                    <label for="newPassword" className="block mb-2 text-sm font-medium ">New password</label>
                    <Input type="password" id="newPassword" placeholder="*******" required={true} />
                </div>
                <AuthButton text="Change Password" />
            </form>

        </div>
    );
}

export default ProfileModule;