import { FC } from 'react';
import Sidebar from './Sidebar';
import SidebarOverlay from './SidebarOverlay';
import { NavSidebarProps } from './types';

const NavSidebar: FC<NavSidebarProps> = ({ isSidebarOpen, handleIsSidebarOpen }) => (
    <>
        <SidebarOverlay isSidebarOpen={isSidebarOpen} handleIsSidebarOpen={handleIsSidebarOpen} />
        <Sidebar isSidebarOpen={isSidebarOpen} handleIsSidebarOpen={handleIsSidebarOpen} />
    </>
);

export default NavSidebar;
