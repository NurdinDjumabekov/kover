import React from 'react';
import styles from './TypesDetailed.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NoneBtn } from '../../SliderMain/SliderMain';
import imgArrow from '../../../assets/icons/backBtn.svg';

const TypesDetailed = () => {
  const [activeType, setActiveType] = React.useState(1);
  const [arrTypes, setArrTypes] = React.useState([
    {
      id: 1,
      textType: 'Все рестораны',
      active: false,
    },
    {
      id: 2,
      textType: 'Национальная кухня',
      active: false,
    },
    {
      id: 3,
      textType: '2 Национальная кухня',
      active: false,
    },
    {
      id: 4,
      textType: '3 Национальная кухня',
      active: false,
    },
  ]);

  React.useEffect(() => {
    const newType = arrTypes.map((type) => {
      if (type.id === activeType) {
        return {
          ...type,
          active: true,
        };
      } else {
        return {
          ...type,
          active: false,
        };
      }
    });
    setArrTypes(newType);
  }, [activeType]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NoneBtn />,
    prevArrow: <NoneBtn />,
  };

  return (
    <ul className={styles.detailed}>
      <li className={styles.slider}>
        {arrTypes.map((type) => (
          <div key={type.id} className={styles.slider__inner}>
            <button
              onClick={() => setActiveType(type.id)}
              className={type.id === activeType ? styles.active : ''}
            >
              {type.textType}
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
