import { ReactNode, MouseEvent } from 'react';
type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
    children: string;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: ButtonType;
    className?: string;
    icon?: ReactNode;
    withIcon?: boolean;
}
