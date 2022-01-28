import { FC } from 'react';
import { ContentProps } from './types';

const cls = {
    main: 'h-full overflow-y-auto mt-3',
    mainWrapper: 'container grid px-4 lg:px-4 mx-auto',
};

const Content: FC<ContentProps> = ({ children }) => (
    <main className={cls.main}>
        <div className={cls.mainWrapper}>{children}</div>
    </main>
);

export default Content;
