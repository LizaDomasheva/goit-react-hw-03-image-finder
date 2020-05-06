import React from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types'

export const Searchbar = ({onSubmit, onChange, query}) => (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" onChange={onChange} className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChange}
        />
      </form>
    </header>
  );

  Searchbar.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    query: PropTypes.string
  }

