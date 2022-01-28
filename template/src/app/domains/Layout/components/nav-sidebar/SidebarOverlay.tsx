import { FC } from 'react';
import { SidebarOverlayProps } from './types';

const cls = {
    overlay: (isSidebarOpen) =>
        `fixed inset-0 z-20 block bg-black lg:hidden transition-opacity opacity-50 ${
            isSidebarOpen ? 'block' : 'hidden'
        } `,
};

const SidebarOverlay: FC<SidebarOverlayProps> = ({ isSidebarOpen, handleIsSidebarOpen }) => (
    <div onClick={() => handleIsSidebarOpen(false)} className={cls.overlay(isSidebarOpen)} />
);

export default SidebarOverlay;
