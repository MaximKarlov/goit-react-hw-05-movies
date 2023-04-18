import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import API from '../Api/API';
import CSS from '../pages/Movie.module.css';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
    const location = useLocation();
    const { movieId } = useParams();
    const [poster, setPoster] = useState('');
    const [titles, setTitles] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState('');
    const [voteAverage, setVoteAverage] = useState('');
    const backLinkLocation = useRef(location.state?.from ?? '/');

    useEffect(() => {
        API.details(movieId).then(response => {
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
            <Link to={backLinkLocation.current}>
                <button>Go back</button>
            </Link>
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

                        {genres && (
                            <ul>
                                {genres.map(el => {
                                    return (
                                        <li key={el.name} className={CSS.genres_text}>
                                            {el.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className={CSS.aditional}>
                <h3 className={CSS.item_title}>Aditional information </h3>
                <ul className={CSS.aditional_items}>
                    <li className={CSS.aditional_item}>
                        <Link to="cast" className={CSS.home_link}>
                            Cast
                        </Link>
                    </li>
                    <li className={CSS.aditional_item}>
                        <Link to="review" className={CSS.home_link}>
                            Review
                        </Link>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<div>"LOADING...."</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieDetails;
