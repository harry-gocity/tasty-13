'use client';

import { FlagshipProvider } from '@flagship.io/react-sdk';

import { FLAGSHIP_API_KEY, FLAGSHIP_ENV_ID } from '../util/consts';

// Server component (layout.tsx) should be able to render FlagshipProvider if it is
// isolated as a client component
// https://beta.nextjs.org/docs/rendering/server-and-client-components#using-context-in-client-components
export function FlagshipClientProviderWrapper({ children, visitorData, initialFlagsData }) {
    return (
        <FlagshipProvider
            envId={FLAGSHIP_ENV_ID}
            apiKey={FLAGSHIP_API_KEY}
            visitorData={visitorData}
            initialFlagsData={initialFlagsData}
        >
            {children}
        </FlagshipProvider>
    );
}
