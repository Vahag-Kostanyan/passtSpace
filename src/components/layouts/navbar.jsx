import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from '../../fierbase.config';
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { errorHandler } from "../../helpers/errorHandler";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const navigation = useNavigate();
    const location = useLocation();
    const ref = useRef();
    const avatarRef = useRef(null);

    useOutsideClick(ref, avatarRef, () => setIsDropdownOpen(false));
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setIsDropdownOpen(false);
        }
    });

    useEffect(() => {
        (() => {
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    navigation('/login')
                }
                setAuthUser(user);
            })
        })();
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .catch(error => {
                errorHandler(error)
            });
    }

    return (
        <nav className="border-gray-200 bg-gray-50 bg-white shadow sm:rounded-lg relative">
            <div className="flex flex-wrap items-center justify-between mx-auto p-5">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/icon.png" className="h-8" alt="PasteSpace Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">PasteSpace</span>
                </a>
                <button
                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 "
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    ref={avatarRef}
                >
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://t3.ftcdn.net/jpg/06/17/13/26/240_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg" alt="user photo" />
                </button>
                {isDropdownOpen && (
                    <div ref={ref} className="absolute right-[10px] top-[50px] mt-2 w-48 bg-white rounded-md shadow-2xl py-2 " id="user-dropdown">
                        <div className="px-4 py-3 border-b-2 mb-2 ">
                            <span className="block text-sm text-gray-500 truncate">{authUser.email}</span>
                        </div>
                        <ul className="flex flex-col gap-2 rounded-lg">
                            <li>
                                <Link
                                    to={'/profile'}
                                    className={location.pathname === '/profile' ? "block py-2 px-3 rounded bg-blue-200" : "block py-2 px-3 rounded hover:bg-gray-200 "}
                                    aria-current="page"
                                >Profile</Link>
                            </li>
                            <li >
                                <Link
                                    to={'/'}
                                    className={location.pathname === '/' ? "block py-2 px-3 text-gray-900 font-xs rounded bg-blue-200" : "block py-2 px-3 text-gray-900 font-xs rounded hover:bg-gray-200"}
                                >Home</Link>
                            </li>
                            <li>
                                <a onClick={userSignOut} className="block py-2 px-3 cursor-pointer text-gray-900 font-xs rounded hover:bg-gray-200"> Log Out</a>
                            </li>
                        </ul>
                    </div>

                )}

            </div>
        </nav>
    );
}

export default Navbar;