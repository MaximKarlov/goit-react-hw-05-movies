import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../Api/API';
import CSS from '../components/Review.module.css';

const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);

    useEffect(() => {
        API.reviews(movieId).then(response => setReview(response.data.results));
    }, [movieId]);

    return (
        <div>
            <ul className={CSS.review_items}>
                {review.map(({ id, content, author, url }) => (
                    <li key={id} id={url} className={CSS.review_card}>
                        <a className={CSS.review_author} href={url}>
                            AUTHOR: {author}
                        </a>
                        <p className={CSS.review_content}> {content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Review;
