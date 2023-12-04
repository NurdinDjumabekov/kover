import React from 'react';
import styles from './TypesDetailed.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changePaginationCount } from '../../../store/reducers/dataAllSlice';
import {
  getAllDataGood,
  getEstablishmentData,
} from '../../../store/reducers/requestFoodSlice';
import Selects from '../Selects/Selects';

const TypesDetailed = () => {
  const dispatch = useDispatch();
  const { establishmentCategory } = useSelector(
    (state) => state.requestFoodSlice
  );
  const [activeType, setActiveType] = React.useState(0);

  // console.log(establishmentCategory, 'establishmentCategory');

  const handle = (id) => {
    localStorage.setItem('paginationMain', 1);
    dispatch(changePaginationCount(1));
    if (id === 0) {
      dispatch(getAllDataGood('http://kover-site.333.kg/get_establishments/'));
    } else {
      dispatch(
        getEstablishmentData(
          `http://kover-site.333.kg/get_establishments?category_code=${id}`
        )
      );
    }
  };

  const [select, setSelect] = React.useState([
    { id: 1, name: 'Популярные' },
    { id: 2, name: 'Менее популярные' },
  ]);

  return (
    <ul className={styles.detailed}>
      <li className={styles.slider}>
        {establishmentCategory?.map((type) => (
          <div
            key={type.codeid}
            className={styles.slider__inner}
            onClick={() => handle(type.codeid)}
          >
            <button
              onClick={() => setActiveType(type.codeid)}
              className={type.codeid === activeType ? styles.active : ''}
            >
              {type.category_name}
            </button>
          </div>
        ))}
      </li>
      <li className={styles.popular}>
        <Selects select={select} setSelect={setSelect} />
      </li>
    </ul>
  );
};

export default TypesDetailed;
