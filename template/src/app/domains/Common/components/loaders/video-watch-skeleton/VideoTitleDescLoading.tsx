import { ReactElement } from 'react';

const VideoTitleDescLoading = (): ReactElement => (
    <div className="flex-1 p-4 mt-1 space-y-4 md:mt-4">
        <div className="w-3/4 h-3 bg-gray-400 rounded dark:bg-gray-700"></div>
        <div className="space-y-2">
            <div className="h-3 bg-gray-400 rounded dark:bg-gray-700"></div>
            <div className="w-5/6 h-3 bg-gray-400 rounded dark:bg-gray-700"></div>
        </div>
    </div>
);

export default VideoTitleDescLoading;
