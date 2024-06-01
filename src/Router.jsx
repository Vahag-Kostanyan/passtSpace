import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './pages/signUp.jsx'
import LogIn from './pages/logIn.jsx'
import Home from './pages/home.jsx'

const SiteRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/logIn" element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default SiteRouter;