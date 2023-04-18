import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { NotFound } from '../pages/NotFound';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Review = lazy(() => import('../components/Review'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=":movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="review" element={<Review />} />
                </Route>
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="review" element={<Review />} />
                </Route>
            </Route>
        </Routes>
    );
};
