import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../Api/API';
import CSS from '../pages/Movie.module.css';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
    const { movieId } = useParams();
    // const [movie, setMovie] = useState([]);
    const [poster, setPoster] = useState('');
    const [titles, setTitles] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState('');
    const [voteAverage, setVoteAverage] = useState('');

    useEffect(() => {
        API.details(movieId).then(response => {
            console.log(response.data);
            const { poster_path, title, overview, genres, vote_average } = response.data;
            setPoster(baseUrlImg + poster_path);
            setTitles(title);
            setOverview(overview);
            setGenres(genres);
            setVoteAverage(vote_average);
        });
    }, [movieId]);

    return (
        <div>
            <div className={CSS.movie_info}>
                <img src={poster} alt={titles} className={CSS.poster} />
                <ul className={CSS.items_info}>
                    <li>
                        <h2 className={CSS.item_title}>{titles}</h2>
                        <p className={CSS.item_text}>User score: {(voteAverage * 10).toFixed(0)}%</p>
                    </li>
                    <li>
                        <h3 className={CSS.item_title}>Overviews</h3>
                        <p className={CSS.item_text}>{overview}</p>
                    </li>
                    <li>
                        <h3 className={CSS.item_title}>Genres</h3>

                        {genres &&
                            genres.map(el => {
                                return (
                                    <p key={el.name} className={CSS.genres_text}>
                                        * {el.name}
                                    </p>
                                );
                            })}
                    </li>
                </ul>
            </div>
            <div className={CSS.aditional}>
                <h3 className={CSS.item_title}>Aditional information </h3>
                <ul className={CSS.aditional_items}>
                    <li className={CSS.aditional_item}>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li className={CSS.aditional_item}>
                        <Link to="review">Review</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};
