import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../fierbase.config";

const HomeModule = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        (() => {
            onAuthStateChanged(auth, (user) => {
                setAuthUser(user);
            })
        })();
    }, []);

    return (
        <div>
        </div>
    );
}

export default HomeModule;