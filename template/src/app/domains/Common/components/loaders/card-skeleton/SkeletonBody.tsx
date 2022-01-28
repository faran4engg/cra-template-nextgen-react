import { FC } from 'react';
import SkeletonLines from './SkeletonLines';

const SkeletonBody: FC = () => (
    <div className="flex space-x-4 animate-pulse">
        <div className="w-12 h-12 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        <SkeletonLines />
    </div>
);

export default SkeletonBody;
