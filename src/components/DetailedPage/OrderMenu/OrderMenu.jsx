import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AccordionSummary } from '@mui/material';
import styles from './OrderMenu.module.scss';
//// imgs
import imgArrow from '../../../assets/icons/backBtn.svg';
import BaskesOrders from '../BaskesOrders/BaskesOrders';
import img from '../../../assets/images/noneData/Image.png';

const OrderMenu = () => {
  const [look, setLook] = React.useState(false);
  const accordionRef = React.useRef(null);

  const handleAccordionToggle = () => {
    setLook(!look);
  };

  const arrBucket = [
    {
      id: 1,
      title: 'Салат из свежих овощей',
      img: img,
      price: '90 сом',
      place: 'Ресторан Фаиза',
    },
    {
      id: 2,
      title: 'Фаиза Фаиза Фаиза Фаиза  Фаиза',
      img: img,
      price: '150 сом',
      place: 'Ресторан Фаиза',
    },
    {
      id: 3,
      title: 'Салат из свежих овощей',
      img: img,
      price: '90 сом',
      place: 'Ресторан Фаиза',
    },
    {
      id: 4,
      title: 'Салат из свежих овощей',
      img: img,
      price: '90 сом',
      place: 'Ресторан Фаиза',
    },
  ];

  React.useEffect(() => {
    const handleClickOutsideAccordion = (e) => {
      if (look && !accordionRef.current.contains(e.target)) {
        setLook(false);
      }
    };

    document.addEventListener('click', handleClickOutsideAccordion);

    return () => {
      document.removeEventListener('click', handleClickOutsideAccordion);
    };
  }, [look]);
  return (
    <div className={styles.accordinBlock}>
      <Accordion
        ref={accordionRef}
        expanded={look}
        onChange={handleAccordionToggle}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <div className={styles.accordinBlock__inner}>
            <button>Оформить заказ</button>
            <div
              className={styles.accordinBlock__inner__btns}
              onClick={() => setLook(false)}
            >
              <button>
                <img
                  src={imgArrow}
                  alt="<"
                  className={look ? styles.active : ''}
                />
                <p>Корзина</p>
              </button>
              <div>
                <p>8 позиций</p>
                <span>2000 сом</span>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.basketBlock}>
            {arrBucket?.map((item) => (
              <BaskesOrders key={item.id} item={item} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default OrderMenu;
