import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './pages/signUp.jsx'
import LogIn from './pages/logIn.jsx'
import Home from './pages/home.jsx'
import { useEffect, useState } from "react";
import Navbar from "./components/layouts/navbar.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fierbase.config.js";

const SiteRouter = () => {
    const [authUser, setAuthUser] = useState(true);

    useEffect(() => {
        (async () => {
            onAuthStateChanged(auth, (user) => {
                if(!user){
                    location.assign = '/login';
                }
                setAuthUser(user);
            })
        })();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/logIn" element={<LogIn />} />
                <Route
                    element={<Navbar />}
                >
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default SiteRouter;