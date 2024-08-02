import { useState } from "react";
import AuthButton from "../../ui/authButton";
import Input from "../../ui/input";
import { getAndCheckUser, userSignOut } from "../../actions/currentUser";
import LogOutButton from "./ui/logOutButton";
import { changePassword } from "./actions/changePassword";
import { useWindowResize } from "../../hooks/useWindowResize";

const ProfileModule = () => {
    const [authUser, setAuthUser] = useState(null);
    const [state, setState] = useState({password: '', newPassword: ''});
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

    useWindowResize(setIsSmallScreen);
    
    getAndCheckUser((user) => setAuthUser(user));

    return (
        <div className={`border-gray-200 bg-gray-50 bg-white shadow-2xl sm:rounded-lg flex gap-3 p-3 ${isSmallScreen ? 'flex flex-col gap-10' : ''}`} >
            <div className="shadow-2xl sm:rounded-lg p-2 flex-col ">
                <div className="flex rounded-full md:me-0 focus:ring-4 justify-center ">
                    <span className="sr-only">Avatar</span>
                    <img className="w-60 h-60 rounded-full" src="/avatar.png" alt="user photo" />
                </div>
                <div className="text-center">
                    {authUser?.email}
                </div>
                <LogOutButton action={userSignOut} />
            </div>


            <form onSubmit={e => changePassword(e, state, authUser)} className={`max-w-sm mx-auto flex flex-col justify-center ${isSmallScreen && 'w-full'}`}>
                <div className="mb-5 w-full">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                    <Input value={state.password} action={e => setState({...state, password: e.target.value})} type="password" id="password" placeholder="*******" required={true} />
                </div>
                <div className="mb-5">
                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium ">New password</label>
                    <Input value={state.newPassword} action={e => setState({...state, newPassword: e.target.value})} type="password" id="newPassword" placeholder="*******" required={true} />
                </div>
                <AuthButton text="Change Password" />
            </form>

        </div>
    );
}

export default ProfileModule;