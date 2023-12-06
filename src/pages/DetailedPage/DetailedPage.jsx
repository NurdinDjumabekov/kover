import React, { useEffect } from 'react';
import styles from './DetailedPage.module.scss';
import TypesDetailed from '../../components/DetailedPage/TypesDetailed/TypesDetailed';
import DataCategories from '../../components/DetailedPage/DataCategories/DataCategories';
import PathToFiles from '../../components/PathToFiles/PathToFiles';
import { useDispatch, useSelector } from 'react-redux';
import Paginations from '../../components/MainPage/Pagination/Pagination';
import { getEstablishmentCategory } from '../../store/reducers/requestFoodSlice';
import { useParams } from 'react-router-dom';

const DetailedPage = () => {
  const dispatch = useDispatch();
  const { estab } = useParams();

  const { allDataFood } = useSelector((state) => state.requestFoodSlice);
  const { paginationCount } = useSelector((state) => state.dataAllSlice);
  const { popular } = useSelector((state) => state.statesSlice);

  let startIndex = (paginationCount - 1) * 16;
  let endIndex = paginationCount * 16;

  let sortData = allDataFood?.slice(startIndex, endIndex);

  React.useEffect(() => {
    dispatch(
      getEstablishmentCategory('http://kover-site.333.kg/get_estab_category')
    );
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [paginationCount]);

  // console.log(allDataFood, 'allDataFood');

  return (
    <div className={styles.detailedBlock}>
      <div className="container">
        <div className={styles.detailedBlock__inner}>
          <PathToFiles estab={estab} />
          <TypesDetailed />
          <DataCategories allDataFood={sortData} />
          {allDataFood?.length !== 0 && <Paginations />}
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
