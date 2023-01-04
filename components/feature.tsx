'use client';

import { ReactElement } from 'react';

import { useFsFlag } from '@flagship.io/react-sdk';

import { useRenderCounter } from '../util/hooks';

export const Feature = (): ReactElement => {
    const renderCount = useRenderCounter();
    const isBrowser = typeof window === 'undefined' ? 'Rendered on Server' : 'Rendered on Client';

    const positionFlag = useFsFlag<'top' | 'bottom'>('position', 'top');
    const totalsPosition = positionFlag.getValue();

    return (
        <>
            <div>Position is {totalsPosition}</div>
            <div>renderCount: {renderCount}</div>
            <div>isBrowser: {isBrowser}</div>
        </>
    );
};
