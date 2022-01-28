import { FC } from 'react';
import SkeletonBody from './SkeletonBody';

import { CardSkeletonProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardSkeleton: FC<CardSkeletonProps> = ({ noOfCards }): any =>
    Array(noOfCards)
        .fill('-')
        .map((_, i) => (
            <div
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className="w-full p-4 mx-auto rounded-md shadow-md h-28 dark:bg-dark-mode bg-light-mode"
            >
                <SkeletonBody />
            </div>
        ));

CardSkeleton.defaultProps = {
    noOfCards: 1,
};

export default CardSkeleton;
