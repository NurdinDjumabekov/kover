import React, { useState } from 'react';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  return (
    <div className={styles.sarchBlock}>
      <div className="container">
        <div className={styles.sarchBlock__inner}>
          <form>
            <input
              type="text"
              id="search"
              placeholder="Поиск"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button id="search">Найти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
