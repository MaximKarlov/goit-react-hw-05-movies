import axios from 'axios';
const TRENDING = 'https://api.themoviedb.org/3/trending/all/week';
const BASEURL = 'https://api.themoviedb.org/3/movie';
const KEY = '803e7bed91e4ee56e6b2c367f47ca8e8';
// const FILTER = '&image_type=photo&orientation=horizontal&safesearch=true';
// const PER_PAGE = '&per_page=12';

export const trending = () => {
    const response = axios(`${TRENDING}?api_key=${KEY}`);
    return response;
};
export const details = id => {
    const response = axios(`${BASEURL}/${id}?api_key=${KEY}&language=en-US`);
    return response;
};

export const credits = id => {
    const response = axios(`${BASEURL}/${id}/credits?api_key=${KEY}&language=en-US`);
    return response;
};

const api = { trending, details, credits };

export default api;
