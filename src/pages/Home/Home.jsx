import { useState, useEffect } from 'react';
import api from 'services/tmdb';
import MovieList from 'components/MovieList';

const Home = () => {
  const [trendings, setTredings] = useState([]);

  useEffect(() => {
    api
      .getTrending()
      .then(data => setTredings(data))
      .catch(console.log);
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <MovieList movies={trendings} />
    </section>
  );
};

export default Home;
