import React, { useEffect } from 'react';
import styles from './TypesInnerData.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const TypesInnerData = () => {
  const dispatch = useDispatch();
  const { everyInnerTypes } = useSelector((state) => state.requestFoodSlice);
  const [activeType, setActiveType] = React.useState(0);
  const [activeText, setActiveText] = React.useState('Все');
  console.log(everyInnerTypes, 'everyInnerTypes');

  //   const handle = (id) => {
  //     localStorage.setItem('paginationMain', 1);
  //     dispatch(changePaginationCount(1));
  //     if (id === 0) {
  //       dispatch(getAllDataFood('http://kover-site.333.kg/get_establishments/'));
  //     } else {
  //       dispatch(
  //         getEstablishmentData(
  //           `http://kover-site.333.kg/get_establishments?category_code=${id}`
  //         )
  //       );
  //     }
  //   };

  return (
    <>
      <ul className={styles.types}>
        <li className={styles.slider}>
          {everyInnerTypes?.map((type) => (
            <div
              key={type.codeid}
              className={styles.slider__inner}
              // onClick={() => handle(type.codeid)}
            >
              <button
                onClick={() => {
                  setActiveText(type?.category_name);
                  setActiveType(type?.codeid);
                }}
                className={type.codeid === activeType ? styles.active : ''}
              >
                {type.category_name}
              </button>
            </div>
          ))}
        </li>
      </ul>
      <h5>{activeText}</h5>
    </>
  );
};

export default TypesInnerData;
