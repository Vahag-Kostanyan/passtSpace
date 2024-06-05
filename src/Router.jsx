import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAndCheckUser } from "./actions/currentUser.js";
import SignUp from './pages/signUp.jsx'
import LogIn from './pages/logIn.jsx'
import Home from './pages/home.jsx'
import Profile from "./pages/profile.jsx";
import Layout from "./components/layouts/layout.jsx";

const SiteRouter = () => {

    if (location.pathname !== '/login' && location.pathname !== '/signup') getAndCheckUser((user) => {});

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/logIn" element={<LogIn />} />
                <Route
                    path='/'
                    element={<Layout />}
                >
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default SiteRouter;