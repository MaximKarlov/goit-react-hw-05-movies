import { Route, Routes, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home';

export const App = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};
