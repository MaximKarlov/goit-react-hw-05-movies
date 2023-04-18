import axios from 'axios';
const TRENDING = 'https://api.themoviedb.org/3/trending/all/week';
const BASEURL = 'https://api.themoviedb.org/3/';
const KEY = '803e7bed91e4ee56e6b2c367f47ca8e8';

export const trending = () => {
    const response = axios(`${TRENDING}?api_key=${KEY}`);
    return response;
};
export const details = id => {
    const response = axios(`${BASEURL}movie/${id}?api_key=${KEY}&language=en-US`);
    return response;
};

export const credits = id => {
    const response = axios(`${BASEURL}movie/${id}/credits?api_key=${KEY}&language=en-US`);
    return response;
};
export const reviews = id => {
    const response = axios(`${BASEURL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
    return response;
};
export const searching = seacrhWord => {
    const response = axios(`${BASEURL}search/movie?api_key=${KEY}&language=en-US&query=${seacrhWord}&page=1&include_adult=false`);
    return response;
};

const api = { trending, details, credits, reviews, searching };

export default api;
