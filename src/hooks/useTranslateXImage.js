import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect, useState } from 'react';

const useTranslateXImage = () => {
    const { scrollPosition, scrollDriction } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(15);

    const handleTranslateX = () => {
        if (scrollDriction === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1,
            );
        } else if (scrollDriction === 'up') {
            setTranslateXPosition(
                translateXPosition >= 15 ? 15 : translateXPosition + 1,
            );
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition,
    };
};
export default useTranslateXImage;
