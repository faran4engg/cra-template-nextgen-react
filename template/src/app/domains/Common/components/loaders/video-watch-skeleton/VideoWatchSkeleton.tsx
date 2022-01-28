import { ReactElement } from 'react';
import VideoPlayerLoading from './VideoPlayerLoading';
import VideoTitleDescLoading from './VideoTitleDescLoading';

const VideoWatchSkeleton = (): ReactElement => {
    return (
        <div className="w-full h-full mx-auto rounded-md shadow-md animate-pulse dark:bg-dark-mode bg-light-mode">
            <VideoPlayerLoading />
            <VideoTitleDescLoading />
        </div>
    );
};

export default VideoWatchSkeleton;
