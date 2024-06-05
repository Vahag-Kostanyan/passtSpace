import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="p-5">
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout