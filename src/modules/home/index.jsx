import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import Collections from "./components/collections";
import ContentIndex from "./components/content";
import { useQueryParams } from "../../hooks/useQueryParams";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getAndCheckUser } from "../../actions/currentUser";

const HomeModule = () => {
    const [authUser, setAuthUser] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650);
    const queryParams = useQueryParams()    

    useWindowResize(setIsSmallScreen);

    getAndCheckUser((user) => setAuthUser(user));

    return (
        <div className="flex  gap-3" style={{ height: 'calc(100vh - 115px)' }}>
            {isSmallScreen ? (<>{queryParams.collection ? (<><ContentIndex /></> ) : (<><Collections /></> ) }</>) : 
            (
                <>
                    <Collections />
                    <ContentIndex />
                </>
            )}

        </div>
    );
}

export default HomeModule;