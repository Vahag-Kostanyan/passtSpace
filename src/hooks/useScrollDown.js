import { useEffect } from "react";

export const useScrollDown = (containerRef) => {
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, []);
}