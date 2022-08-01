import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = ({ onSubmit, queryInit }) => {
  const [query, setQuery] = useState(queryInit);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter the title of the movie');
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setQuery(e.currentTarget.value)}
        value={query}
      />
      <button type="submit">Search</button>
      <ToastContainer autoClose={2000} />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  queryInit: PropTypes.string.isRequired,
};

export default SearchForm;
