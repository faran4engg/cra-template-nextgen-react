import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
    () => import('./HomePage'),
    (module) => module.default,
);
