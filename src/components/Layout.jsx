import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CSS from './Layout.module.css';

export const Layout = () => {
    return (
        <div>
            <ul className={CSS.layout_items}>
                <li className={CSS.layout_item}>
                    <NavLink to="/" className={CSS.linked}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={CSS.linked}>
                        Movies
                    </NavLink>
                </li>
            </ul>
            <Suspense fallback={<div>"LOADING..."</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};
