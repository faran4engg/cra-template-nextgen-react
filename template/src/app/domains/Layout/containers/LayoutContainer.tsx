import { useState, FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from 'app/router/routes';

import { NavSidebar, Content, Header } from 'app/domains/Layout/components';
import { NotFoundPage } from 'app/pages/NotFoundPage/async';

const cls = {
    layout: 'flex h-screen bg-light-mode-content-bg dark:bg-dark-mode-content-bg text-gray-500 dark:text-gray-200',
    mainWrapper: 'flex flex-col flex-1 w-full',
};

const LayoutContainer: FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.twTheme) return;
        document.querySelector('html')!.classList.add(localStorage.twTheme);
    }, []);

    return (
        <div className={cls.layout}>
            <NavSidebar
                isSidebarOpen={isSidebarOpen}
                handleIsSidebarOpen={() => setIsSidebarOpen((prevFlag) => !prevFlag)}
            />

            <div className={cls.mainWrapper}>
                <Header handleIsSidebarOpen={() => setIsSidebarOpen((prevFlag) => !prevFlag)} />

                <Content>
                    <Routes>
                        {routes.map((route) =>
                            route.component ? (
                                <Route
                                    key={route.path}
                                    path={`${route.path}`}
                                    element={<route.component />}
                                />
                            ) : null,
                        )}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Content>
            </div>
        </div>
    );
};

export default LayoutContainer;
