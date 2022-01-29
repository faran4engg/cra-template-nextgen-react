import { FC, ReactElement } from 'react';
import * as Icons from 'assets/icons';

interface ISvgIcon {
    icon: string;
    [x: string]: string;
}

const SvgIcon: FC<ISvgIcon> = ({ icon, ...props }): ReactElement => {
    const Icon = Icons[icon];
    return <Icon aria-hidden="true" {...props} />;
};

export default SvgIcon;
