import { ReactElement, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { LayoutContainer } from 'app/domains/Layout/containers/async';
import * as serviceWorker from 'serviceWorkerRegistration';
import './index.css';

const queryCache = new QueryCache();
const queryClient = new QueryClient({
    queryCache,
});

const AppMain = (): ReactElement => {
    useEffect(() => {
        serviceWorker.register();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <LayoutContainer />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default AppMain;
