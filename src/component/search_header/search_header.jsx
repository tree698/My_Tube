import React, { useRef, memo } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch, onClickLogo }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
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
      <div className={styles.logo} onClick={() => onClickLogo()}>
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
});

export default SearchHeader;
