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
import {
  changeActiveType,
  changePopular,
} from '../../../store/reducers/statesSlice';

const TypesDetailed = ({ id }) => {
  const dispatch = useDispatch();
  const sliderRef = React.createRef();
  const { activeTypeEstab } = useSelector((state) => state.statesSlice);
  const { establishmentCategory } = useSelector(
    (state) => state.requestFoodSlice
  );

  const handleNext = (e) => {
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

  React.useEffect(() => {
    if (activeTypeEstab !== 0) {
      dispatch(
        getEstablishmentData(
          `http://kover-site.333.kg/get_establishments?category_code=${activeTypeEstab}`
        )
      );
    }
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NoneBtn />,
    prevArrow: <NoneBtn />,
    variableWidth: true,
    focusOnSelect: true,
    // initialSlide: indexSlide,
  };

  return (
    <>
      {+id === 15 && (
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
                    onClick={() => dispatch(changeActiveType(type.codeid))}
                    className={
                      type.codeid === activeTypeEstab ? styles.active : ''
                    }
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
      )}
    </>
  );
};

export default TypesDetailed;
