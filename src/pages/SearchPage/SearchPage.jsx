import React, { useState } from 'react';
import styles from './SearchPage.module.scss';
import SelectInput from '../../components/DetailedPage/SelectInput/SelectInput';
import { useDispatch } from 'react-redux';
import { mainSearch } from '../../store/reducers/requestFoodSlice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [searchId, setSearchId] = useState(1);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const searchDataFn = (e) => {
    e.preventDefault();
    dispatch(mainSearch({ search, searchId }));
  };

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
            <div className={styles.selectInput}>
              <SelectInput setSearchId={setSearchId} />
            </div>
            <button id="search" onClick={searchDataFn}>
              Найти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
