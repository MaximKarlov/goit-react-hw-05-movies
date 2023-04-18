import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../Api/API';
import CSS from '../components/Cast.module.css';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        API.credits(movieId).then(
            response => setCast(response.data.cast),
            error => console.error(error)
        );
    }, [movieId]);

    return (
        <div>
            <ul className={CSS.cast_items}>
                {cast.map(({ cast_id, original_name, character, profile_path }) => (
                    <li key={cast_id} className={CSS.cast_card}>
                        <img src={baseUrlImg + profile_path} alt={original_name} className={CSS.cast_image}></img>
                        <p className={CSS.cast_text}>{original_name}</p>
                        <p className={CSS.cast_text}>Character: {character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cast;
