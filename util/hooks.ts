import { useRef } from 'react';

export const useRenderCounter = (): number => {
    const renderCounter = useRef(0);
    renderCounter.current = renderCounter.current + 1;
    return renderCounter.current;
};
