import { useDataByMovieId } from 'hooks/useDataByMovieId';
import api from 'services/tmdb';

const Cast = () => {
  const cast = useDataByMovieId(api.getMovieCast);

  return (
    <section>
      {cast.length > 0 && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <section key={id}>
              {profile_path && (
                <img src={api.getImageUrl(profile_path, true)} alt="" />
              )}
              <li>
                <>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </>
              </li>
            </section>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cast;
