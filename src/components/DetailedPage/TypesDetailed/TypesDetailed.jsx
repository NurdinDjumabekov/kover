import React from 'react';
import styles from './TypesDetailed.module.scss';
import imgArrow from '../../../assets/icons/backBtn.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changePaginationCount } from '../../../store/reducers/dataAllSlice';

const TypesDetailed = () => {
  const dispatch = useDispatch();
  const { establishmentCategory } = useSelector(
    (state) => state.requestFoodSlide
  );
  const [activeType, setActiveType] = React.useState(0);

  // console.log(establishmentCategory, 'establishmentCategory');

  const handle = () => {
    localStorage.setItem('paginationMain', 1);
    dispatch(changePaginationCount(1));
  };

  return (
    <ul className={styles.detailed}>
      <li className={styles.slider}>
        {establishmentCategory?.map((type) => (
          <div
            key={type.codeid}
            className={styles.slider__inner}
            onClick={handle}
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
        <button>
          <p>Популярные</p>
          <img src={imgArrow} alt=">" />
        </button>
      </li>
    </ul>
  );
};

export default TypesDetailed;
