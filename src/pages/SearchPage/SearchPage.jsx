import React, { useState } from "react";
import styles from "./SearchPage.module.scss";
import SelectInput from "../../components/SearchPage/SelectInput/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmptySearch,
  changeMainSearch,
  mainSearch,
} from "../../store/reducers/requestFoodSlice";
import MiniPreloader from "../../components/MiniPreloader/MiniPreloader";
import DataSearch from "../../components/SearchPage/DataSearch/DataSearch";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchId, setSearchId] = useState(1);
  const { miniLoader, dataSearchMain, emptySearch } = useSelector(
    (state) => state.requestFoodSlice
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    dispatch(changeEmptySearch(false));
  }, [search]);

  const searchDataFn = (e) => {
    e.preventDefault();
    dispatch(changeMainSearch([]));
    dispatch(mainSearch({ search, searchId }));
  };
  console.log(searchId);

  // console.log(dataSearchMain, "dataSearchMain");

  return (
    <div className={styles.sarchBlock}>
      <div className="container">
        <div className={styles.sarchBlock__inner}>
          <form>
            <input
              // type="search"
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
          {miniLoader && <MiniPreloader />}
          {emptySearch && (
            <i className="noneData">По вашему заросу ничего не найдено!</i>
          )}
          <DataSearch dataSearchMain={dataSearchMain} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
