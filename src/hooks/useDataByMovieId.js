import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useDataByMovieId = dataLoader => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    dataLoader(movieId).then(setData).catch(console.error);
  }, [dataLoader, movieId]);

  return data;
};
