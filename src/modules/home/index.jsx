import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../fierbase.config";
import { useNavigate } from "react-router-dom";
import { successAlert } from "../../helpers/alert";
import { errorHandler } from "../../helpers/errorHendler";

const HomeModule = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigation = useNavigate();

    useEffect(() => {
        (() => {
            onAuthStateChanged(auth, (user) => {
                if(!user){
                    navigation('/login')
                }
                setAuthUser(user);
            })
        })();
    }, []);

    const userSignOut = () =>{
        signOut(auth)
        .then(res => {
        })
        .catch(error => {
            errorHandler(error)
        });
    }

    const test = () => { 

        successAlert('test')
    
    }

    return (
        <div>
            <button onClick={userSignOut}>
                logOut
            </button>
<br />
            <button onClick={test}>
                toster
            </button>
        </div>
    );
}

export default HomeModule;