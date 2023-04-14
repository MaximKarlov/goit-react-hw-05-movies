import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { Layout } from './Layout';
import { Cast } from '../components/Cast';
import { Review } from '../components/Review';
// import { NotFound } from '../pages/NotFound';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=":movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="review" element={<Review />} />
                </Route>
            </Route>
        </Routes>
    );
};
