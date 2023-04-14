import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../Api/API';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        API.credits(movieId).then(response => setCast(response.data.cast));
    }, [movieId]);

    return (
        <div>
            <ul>
                {cast.map(({ cast_id, original_name, character, profile_path }) => (
                    <li key={cast_id}>
                        <img src={baseUrlImg + profile_path} alt={original_name}></img>
                        <p>{original_name}</p>
                        <p>Character :{character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
