import { FC } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { mainRoutes } from 'app/router/sidebar';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';

interface SidebarContentProps {
    handleIsSidebarOpen: () => void;
}

const SidebarContent: FC<SidebarContentProps> = ({ handleIsSidebarOpen }) => (
    <div className="py-4 pt-0 text-gray-700 dark:text-gray-400">
        <ul className="mt-10 lg:mt-0 ">
            <li className="relative px-6 py-3 ">
                <NavLink to="/home" className="hidden lg:block">
                    <SvgIcon className="w-24 h-10 cursor-pointer lg:ml-0" icon="NextGenDevLogo" />
                </NavLink>
            </li>
            {mainRoutes.map((route) => (
                <li className="relative px-6 py-2" key={route.name} onClick={handleIsSidebarOpen}>
                    <NavLink
                        to={route.path}
                        className={({ isActive }) =>
                            `inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 ${
                                isActive && ''
                            }`
                        }
                    >
                        <Routes>
                            <Route
                                path={route.path}
                                element={
                                    <span className="absolute inset-y-0 left-0 w-1 bg-purple-700 rounded-tr-lg rounded-br-lg" />
                                }
                            />
                        </Routes>

                        <SvgIcon className="w-5 h-5" icon={route.icon} />
                        <span className="ml-4">{route.name}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

export default SidebarContent;
