import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../Api/API';

export const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        API.trending()
            .then(response => {
                return response.data;
            })
            .then(elem => {
                setPopularMovies(elem.results);
            });
    }, []);

    console.log('Popular movies', popularMovies);

    return (
        <div>
            <ul>
                {popularMovies.map(({ id, title, name }) => (
                    <li key={id}>
                        <Link to={`${id}`}>{title || name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
