import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { ErrorBoundary } from 'app/domains/Common/components/error-boundary';
import AppMain from 'app/app-main';
import * as serviceWorker from './serviceWorkerRegistration';
import 'assets/css/index.css';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <StrictMode>
        <ErrorBoundary>
            <AppMain />
        </ErrorBoundary>
    </StrictMode>,
    MOUNT_NODE,
);

serviceWorker.register();
