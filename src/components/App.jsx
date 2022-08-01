import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './ShareadLayout';
import NotFound from 'pages/NotFound';

//import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
//import Cast from './Cast';
//import Reviews from './Reviews';
//import Movies from 'pages/Movies';

// const createAsyncComponent = path => lazy(() => import(path));
// const createAsyncComponent = path => {
//   const componentName = path.match(/[a-zA-Z]+$/)[0];
//   return lazy(() =>
//     import(path).then(module => ({ ...module, default: module[componentName] }))
//   );
// };

// const Home = createAsyncComponent('pages/Home');
// const MovieDetails = createAsyncComponent('pages/MovieDetails');
// const Cast = createAsyncComponent('./Cast');
// const Reviews = createAsyncComponent('./Reviews');
// const Movies = createAsyncComponent('pages/Movies');

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
