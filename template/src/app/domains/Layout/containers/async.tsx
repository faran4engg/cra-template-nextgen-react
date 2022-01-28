import { lazyLoad } from 'utils/loadable';

export const LayoutContainer = lazyLoad(
    () => import('./LayoutContainer'),
    (module) => module.default,
);
