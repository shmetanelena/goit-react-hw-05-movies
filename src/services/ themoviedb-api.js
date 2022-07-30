import axios from 'axios';

const API_KEY = 'c1c0e09e2b2780ccf5e67712da2ef6c9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrending = async (page = 1, range = 'day') => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: page,
  });
  const response = await axios.get(
    `${BASE_URL}/trending/movie/${range}?${params}`
  );
  return response.data;
};
