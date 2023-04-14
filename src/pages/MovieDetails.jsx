import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../Api/API';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
    const { movieId } = useParams();
    // const [movie, setMovie] = useState([]);
    const [poster, setPoster] = useState('');
    const [titles, setTitles] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState('');
    const [vote_count, setVoteCount] = useState('');

    useEffect(() => {
        API.details(movieId).then(response => {
            const { poster_path, title, overview, genres, vote_count } = response.data;
            setPoster(baseUrlImg + poster_path);
            setTitles(title);
            setOverview(overview);
            setGenres(genres);
            setVoteCount(vote_count);
        });
    }, [movieId]);

    // let posterImg = baseUrlImg + poster_path;

    return (
        <div>
            <img src={poster} alt={titles} />
            <ul>
                <li>
                    <h2>{titles}</h2>
                    <p>{vote_count}</p>
                </li>
                <li>
                    <h3>Overviews</h3>
                    <p>{overview}</p>
                </li>
                <li>
                    <h3>Genres</h3>
                    <p>
                        {genres &&
                            genres.map(el => {
                                return <span key={el.name}>{el.name}</span>;
                            })}
                    </p>
                </li>
            </ul>
            <div>
                <h3>Aditional information </h3>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="review">Review</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    );
};
