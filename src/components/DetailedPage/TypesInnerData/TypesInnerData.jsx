import React, { useEffect } from 'react';
import styles from './TypesInnerData.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import arrow from '../../../assets/icons/backBtn.svg';
import Slider from 'react-slick';
import { NoneBtn } from '../../SliderMain/SliderMain';

const TypesInnerData = () => {
  const dispatch = useDispatch();
  const { everyInnerTypes } = useSelector((state) => state.requestFoodSlice);
  const [activeType, setActiveType] = React.useState(0);
  const [activeText, setActiveText] = React.useState('Все');
  // console.log(everyInnerTypes, 'everyInnerTypes');

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

  const sliderRef = React.createRef();

  const handleNext = () => {
    sliderRef.current.slickNext();
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
    <>
      {everyInnerTypes.length !== 1 && everyInnerTypes.length !== 0 && (
        <>
          <ul className={styles.types}>
            <li className={styles.slider}>
              <Slider ref={sliderRef} {...settings}>
                {everyInnerTypes?.map((type) => (
                  <div
                    key={type.codeid}
                    className={styles.slider__inner}
                    onClick={() => handleClick(type.codeid)}
                  >
                    <button
                      onClick={() => setActiveType(type.codeid)}
                      className={
                        type.codeid === activeType ? styles.active : ''
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
          </ul>
          <h5>{activeText}</h5>
        </>
      )}
    </>
  );
};

export default TypesInnerData;
