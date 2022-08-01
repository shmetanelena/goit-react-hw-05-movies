import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/tmdb';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query') ?? '';

  const handleSubmit = q => {
    if (query !== q) {
      query = q;
      const params = query !== '' ? { query } : {};
      setSearchParams(params);
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    api.searchMovie(query).then(setMovies).catch(toast.info('Not found :(('));
  }, [query]);

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} queryInit={query} />
      {movies.length > 0 && <MovieList movies={movies} />}
      <ToastContainer autoClose={2000} />
    </main>
  );
};

export default Movies;
