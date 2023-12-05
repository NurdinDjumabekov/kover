import React from 'react';
import styles from './SelectsPopular.module.scss';
import img from '../../../assets/icons/backBtn.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changePaginationCount } from '../../../store/reducers/dataAllSlice';
import { changePopular } from '../../../store/reducers/statesSlice';

const SelectsPopular = () => {
  const [active, setActive] = React.useState(false);
  const accordionRef = React.useRef(null);
  const dispatch = useDispatch();

  const selectArr = [
    { id: 1, name: 'Популярные' },
    { id: 2, name: 'Топ' },
    { id: 3, name: 'Акция' },
  ];

  const savedActiveText = localStorage.getItem('activeText');

  const [activeText, setActiveText] = React.useState(
    savedActiveText || selectArr?.[0]?.name
  );

  React.useEffect(() => {
    const handleChange = (e) => {
      if (
        active &&
        accordionRef.current &&
        !accordionRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener('click', handleChange);

    return () => {
      document.removeEventListener('click', handleChange);
    };
  }, [active]);

  return (
    <div className={styles.selectBlock} id="uniqueSelectID" ref={accordionRef}>
      <div
        className={styles.selectBlock__inner}
        onClick={() => setActive((prevState) => !prevState)}
      >
        <p>{activeText}</p>
        <img
          src={img}
          alt="<"
          style={active ? { transform: 'rotate(90deg)' } : {}}
        />
      </div>
      {active && (
        <div className={styles.selectBlock__activeBlock}>
          {selectArr?.map((sel) => (
            <p
              onClick={() => {
                setActiveText(sel.name);
                setActive(false);
                dispatch(changePaginationCount(1));
                dispatch(changePopular(sel.name));
                localStorage.setItem('activeText', sel.name);
              }}
              key={sel.id}
            >
              {sel.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectsPopular;
