import { useEffect } from "react";

export const useOutsideClick = (ref, elementRef = null, location = null, setState) => {
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target) && !elementRef.current.contains(e.target)) {
                setState();
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [ref, setState]);

    useEffect(() => {
        setState();
    }, [location])
}

