import React, { useState } from 'react';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.sarchBlock}>
      <div className="container">
        <div className={styles.sarchBlock__inner}>
          <form>
            <input
              type="search"
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
