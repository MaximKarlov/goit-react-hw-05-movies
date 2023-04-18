import { useEffect, useState } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import API from '../Api/API';
import CSS from './Movie.module.css';

let prevSearch = '';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams('');
    const location = useLocation();
    const [searchStart, setSearchStart] = useState(false);
    const [searchMovies, setSearchMovies] = useState([]);
    const searchingWord = searchParams.get('searchWord') ?? '';

    useEffect(() => {
        if (location.search.slice(12) === prevSearch) {
            API.searching(prevSearch)
                .then(response => {
                    return response.data;
                })
                .then(elem => {
                    setSearchMovies(elem.results);
                })
                .catch(error => console.log(error));
        }
    }, [location.search]);

    useEffect(() => {
        if (searchStart) {
            API.searching(searchingWord)
                .then(
                    response => {
                        return response.data;
                    },
                    err => console.log(err)
                )

                .then(
                    elem => {
                        setSearchMovies(elem.results);
                    },
                    err => console.log(err)
                )
                .catch(error => console.log(error));
            prevSearch = searchingWord;
        }
        setSearchStart(false);
    }, [searchStart, searchingWord]);

    const handleClick = () => {
        setSearchStart(true);
    };

    const updateQueryParams = e => {
        if (e.target.value === '') {
            return setSearchParams({});
        }
        setSearchParams({ searchWord: e.target.value });
    };

    return (
        <div>
            <input type="text" value={searchingWord} id="movie" className={CSS.movies_input} onChange={updateQueryParams} />
            <button type="submit" onClick={handleClick}>
                SEARCH
            </button>
            {searchMovies.length > 0 ? (
                <ul className={CSS.home_items}>
                    {searchMovies.map(({ id, title, name }) => (
                        <li key={id}>
                            <Link to={`${id}`} state={{ from: location }} className={CSS.home_link}>
                                {title || name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>
                    <h3 className={CSS.item_text}>Співпадінь не знайдено по слову "{searchingWord}"</h3>
                </div>
            )}
        </div>
    );
};
export default Movies;
