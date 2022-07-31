import { useDataByMovieId } from 'hooks/useDataByMovieId';
import api from 'services/tmdb';

const Reviews = () => {
  const reviews = useDataByMovieId(api.getMovieReviews);

  return (
    <section>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </section>
  );
};

export default Reviews;
