import { FC } from 'react';

const SkeletonLines: FC = () => (
    <div className="flex-1 py-1 space-y-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
    </div>
);

export default SkeletonLines;
