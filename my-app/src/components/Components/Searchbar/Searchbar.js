import React, { Component } from 'react';

import s from '../../utils/styles.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({
      query,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onChangeQuery(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const query = this.state.query;
    return (
      <>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={s['SearchForm-button']}>
              <span className={s['SearchForm-button-label']}>Search</span>
            </button>

            <input
              className={s['SearchForm-input']}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={query}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
};

export default Searchbar;
