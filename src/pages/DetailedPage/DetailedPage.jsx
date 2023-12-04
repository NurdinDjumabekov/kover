import React, { useEffect } from 'react';
import styles from './DetailedPage.module.scss';
import TypesDetailed from '../../components/DetailedPage/TypesDetailed/TypesDetailed';
import DataCategories from '../../components/DetailedPage/DataCategories/DataCategories';
import PathToFiles from '../../components/PathToFiles/PathToFiles';
import { useDispatch, useSelector } from 'react-redux';
import { changePathOne } from '../../store/reducers/pathSiteSlice';
import Paginations from '../../components/MainPage/Pagination/Pagination';
import { getEstablishmentCategory } from '../../store/reducers/requestFoodSlice';

const DetailedPage = () => {
  const dispatch = useDispatch();

  const { allDataFood } = useSelector((state) => state.requestFoodSlice);

  const { paginationCount } = useSelector((state) => state.dataAllSlice);

  let startIndex = (paginationCount - 1) * 16;
  let endIndex = paginationCount * 16;

  let sortData = allDataFood?.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(changePathOne({ link: '/categories', title: 'Каталог' }));
    dispatch(
      getEstablishmentCategory('http://kover-site.333.kg/get_estab_category')
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paginationCount]);

  console.log(allDataFood, 'allDataFood');
  
  return (
    <div className={styles.detailedBlock}>
      <div className="container">
        <div className={styles.detailedBlock__inner}>
          <PathToFiles />
          <TypesDetailed />
          <DataCategories allDataFood={sortData} />
          {allDataFood?.length !== 0 && <Paginations />}
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
