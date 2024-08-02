import { useEffect } from "react";

export const useWindowResize = (set) => {
    useEffect(() => {
        const handleResize = () => {
            set(window.innerWidth < 650);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
}