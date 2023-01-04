import { ReactNode } from 'react';

import { Flagship } from '@flagship.io/react-sdk';

import { FLAGSHIP_API_KEY, FLAGSHIP_ENV_ID } from '../util/consts';
import { FlagshipClientProviderWrapper } from './providers';

// this is a server component, it can't directly render a FlagshipProvider,
// as react context is only available on the client
export default async function RootLayout({ children }: { children: ReactNode }) {
    const { initialFlagsData, visitorData } = await getData();

    return (
        <html>
            <head />
            <body>
                <FlagshipClientProviderWrapper initialFlagsData={initialFlagsData} visitorData={visitorData}>
                    {children}
                </FlagshipClientProviderWrapper>
            </body>
        </html>
    );
}

const getData = async () => {
    // Start the Flagship SDK
    // TODO .start() breaks next 13 server rendering - somehow triggers a call to createContext, which is not allowed in server components
    const flagship = Flagship.start(FLAGSHIP_API_KEY, FLAGSHIP_ENV_ID, {
        fetchNow: false,
    });

    const initialVisitorData = {
        id: `visitor-${Math.floor(Math.random() * 250)}`,
        context: {},
        isAuthenticated: false,
    };

    // Create a new visitor
    const visitor = flagship.newVisitor({
        visitorId: initialVisitorData.id,
        context: initialVisitorData.context,
        hasConsented: true, // for demo purposes
    });

    // Fetch flags
    await visitor.fetchFlags();

    // Pass data to the page via props
    return {
        initialFlagsData: visitor.getFlagsDataArray(),
        visitorData: initialVisitorData,
    };
};
