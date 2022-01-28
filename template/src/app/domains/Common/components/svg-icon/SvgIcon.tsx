import { FC, ReactElement } from 'react';
import * as Icons from 'assets/icons';
import { ISvgIcon } from './types';

const SvgIcon: FC<ISvgIcon> = ({ icon, ...props }): ReactElement => {
    const Icon = Icons[icon];
    return <Icon aria-hidden="true" {...props} />;
};

export default SvgIcon;
