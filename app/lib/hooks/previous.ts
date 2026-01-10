import { useEffect, useRef } from "react";

// Custom Hook to get previous value
export default function usePrevious<T>(value: T): T | null {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    // eslint-disable-next-line react-hooks/refs
    return ref.current;
}