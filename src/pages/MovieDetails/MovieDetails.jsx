import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import api from 'services/tmdb';
import BackLink from 'components/BackLink';

import { Image, FilmDetailsbox, FilmInfoBox } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    api.getMovie(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  return (
    <main>
      {movie && (
        <>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <div>
            <FilmDetailsbox>
              <Image src={api.getImageUrl(movie.poster_path)} alt="poster" />
              <FilmInfoBox>
                <h2>
                  {movie.title} ({movie.release_date.substring(0, 4)})
                </h2>
                <p>User Score: {movie.vote_average * 10}%</p>
                <h5>Overview</h5>
                <p>${movie.overview}</p>
                <h5>Genres</h5>
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              </FilmInfoBox>
            </FilmDetailsbox>
            <hr />
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <hr />
            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
