import { useState } from 'react';

import s from '../../utils/styles.module.css';
import PropTypes from 'prop-types';

function Searchbar({ onChangeQuery }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const q = e.target.value;
    setQuery(q);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onChangeQuery(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };
  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s['SearchForm-button']}>
            <span className={s['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={s['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
};

export default Searchbar;
