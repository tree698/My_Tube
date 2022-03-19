import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => {
  const inputRef = useRef();
  const handleSearch = () => {
    console.log('yes');
  };
  const handleClick = () => {
    handleSearch();
  };
  const handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="YouTube logo" />
        <h1 className={styles.title}>MyTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={handleKeyPress}
      />
      <button className={styles.button} type="submit" onClick={handleClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="seaarch"
        />
      </button>
    </header>
  );
};

export default SearchHeader;