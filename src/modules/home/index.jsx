import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../fierbase.config";
import Collections from "./components/collections";
import ContentIndex from "./components/content";

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
        <div className="flex  gap-3" style={{ height: 'calc(100vh - 115px)' }}>
            <Collections/>
            <ContentIndex/>
        </div>
    );
}

export default HomeModule;