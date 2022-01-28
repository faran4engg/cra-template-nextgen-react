import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SvgIcon } from '../svg-icon';

const NotFound: FC<{ msg: string }> = ({ msg }) => (
    <div className="flex flex-col items-center">
        <SvgIcon
            className="w-16 h-16 mt-8 text-theme-color-light dark:text-theme-color-dark"
            icon="Error404Icon"
        />

        <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">404</h1>
        <p className="my-4 text-gray-700 dark:text-gray-300">{msg}</p>

        <Link
            className="animate-bounce text-theme-color-light dark:text-theme-color-dark hover:underline"
            to="/"
        >
            Go to Home page
        </Link>
    </div>
);

export default NotFound;
