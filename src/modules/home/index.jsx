import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../fierbase.config";
import { useNavigate } from "react-router-dom";

const HomeModule = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigation = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(!user){
                navigation('/login')
            }
            setAuthUser(user);
        })
    }, []);

    const userSignOut = () =>{
        signOut(auth)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <button onClick={userSignOut}>
                logOut
            </button>
        </div>
    );
}

export default HomeModule;