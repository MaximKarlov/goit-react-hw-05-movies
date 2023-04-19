import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from '../Api/API';
import CSS from '../pages/Movie.module.css';

const Home = () => {
    const location = useLocation();
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        API.trending()
            .then(response => {
                return response.data;
            })
            .then(elem => {
                setPopularMovies(elem.results);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <ul className={CSS.home_items}>
                {popularMovies.map(({ id, title, name }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }} className={CSS.home_link}>
                            {title || name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
