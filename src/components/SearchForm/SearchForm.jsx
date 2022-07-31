import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, queryInit }) => {
  const [query, setQuery] = useState(queryInit);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
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
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  queryInit: PropTypes.string.isRequired,
};

export default SearchForm;
