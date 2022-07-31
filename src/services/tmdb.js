import axios from 'axios';
import w92 from '../images/w92.jpg';
import w154 from '../images/w154.jpg';
const images = { w92, w154 };

const API_KEY = 'c1c0e09e2b2780ccf5e67712da2ef6c9';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p';

const getImageUrl = (path, small) => {
  const size = small ? 'w92' : 'w342';
  return path ? `${IMAGES_BASE_URL}/${size}${path}` : images[size];
};

const getTrending = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: 1,
  });
  const response = await axios.get(`${BASE_URL}/trending/movie/day?${params}`);
  const data = response.data;
  return data.results;
};

const searchMovie = async query => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: 1,
    query: query,
  });
  const response = await axios.get(`${BASE_URL}/search/movie?${params}`);
  const data = response.data;
  return data.results;
};

const getMovie = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await axios.get(`${BASE_URL}/movie/${id}?${params}`);
  const data = response.data;
  return data;
};

const getMovieCast = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits?${params}`);
  const data = response.data;
  return data.cast;
};

const getMovieReviews = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?${params}`);
  const data = response.data;
  return data.results;
};

const api = {
  getTrending,
  searchMovie,
  getMovie,
  getImageUrl,
  getMovieCast,
  getMovieReviews,
};

export default api;
