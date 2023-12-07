import React from 'react';
import styles from './TypesDetailed.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { NoneBtn } from '../../SliderMain/SliderMain';
import arrow from '../../../assets/icons/backBtn.svg';

/// func
import { changePaginationCount } from '../../../store/reducers/dataAllSlice';
import {
  getAllDataFood,
  getEstablishmentData,
} from '../../../store/reducers/requestFoodSlice';
import SelectsPopular from '../Selects/SelectsPopular';
import { changePopular } from '../../../store/reducers/statesSlice';

const TypesDetailed = () => {
  const dispatch = useDispatch();
  const [activeType, setActiveType] = React.useState(0);
  const { establishmentCategory } = useSelector(
    (state) => state.requestFoodSlice
  );

  const sliderRef = React.createRef();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handleClick = (id) => {
    localStorage.setItem('paginationMain', 1);
    dispatch(changePaginationCount(1));
    if (id === 0) {
      dispatch(getAllDataFood('http://kover-site.333.kg/get_establishments/'));
    } else {
      dispatch(
        getEstablishmentData(
          `http://kover-site.333.kg/get_establishments?category_code=${id}`
        )
      );
    }
    // dispatch(changePopular(popular));
    dispatch(changePopular('Все'));
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NoneBtn />,
    prevArrow: <NoneBtn />,
    variableWidth: true,
  };

  return (
    <ul className={styles.detailed}>
      <li className={styles.slider}>
        <Slider ref={sliderRef} {...settings}>
          {establishmentCategory?.map((type) => (
            <div
              key={type.codeid}
              className={styles.slider__inner}
              onClick={() => handleClick(type.codeid)}
            >
              <button
                onClick={() => setActiveType(type.codeid)}
                className={type.codeid === activeType ? styles.active : ''}
              >
                {type.category_name}
              </button>
            </div>
          ))}
        </Slider>
        <button onClick={handleNext} className={styles.nextBtn}>
          <img src={arrow} alt="<" />
        </button>
      </li>
      <li className={styles.popular}>
        <SelectsPopular />
      </li>
    </ul>
  );
};

export default TypesDetailed;
