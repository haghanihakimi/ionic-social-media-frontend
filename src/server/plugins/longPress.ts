import { useState } from 'react';

type LongPressFunction = () => void;

export function longPress() {
    const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);

    const startLongPress = (longPressFunction: LongPressFunction, time = 500) => {
        // Set a timeout for long press (e.g., 250 milliseconds)
        setLongPressTimer(setTimeout(longPressFunction, time));
    };

    const cancelLongPress = () => {
        // Clear the long press timer if it's active
        if (longPressTimer) {
            clearTimeout(longPressTimer);
            setLongPressTimer(null);
        }
    };

    return { startLongPress, cancelLongPress };
}