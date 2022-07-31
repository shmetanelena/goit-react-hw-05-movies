import { Route, Routes } from 'react-router-dom';
//import { lazy } from 'react';
import SharedLayout from './ShareadLayout';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Movies from 'pages/Movies';

// const createAsyncComponent = path => lazy(() => import(path));
// const createAsyncComponent = path => {
//   const componentName = path.match(/[a-zA-Z]+$/)[0];
//   return lazy(() =>
//     import(path).then(module => ({ ...module, default: module[componentName] }))
//   );
// };

// const Home = createAsyncComponent('../pages/Home.js');
// const MovieDetails = createAsyncComponent('pages/MovieDetails');
// const Cast = createAsyncComponent('./Cast');
// const Reviews = createAsyncComponent('./Reviews');
// const Movies = createAsyncComponent('pages/Movies');

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
