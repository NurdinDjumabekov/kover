import React from 'react';
import styles from './Selects.module.scss';
import img from '../../../assets/icons/backBtn.svg';

const Selects = ({ select, setSelect }) => {
  const [activeText, setActiveText] = React.useState(select?.[0]?.name);
  const [active, setActive] = React.useState(false);

  return (
    <div className={styles.selectBlock}>
      <div
        className={styles.selectBlock__inner}
        onClick={() => setActive(!active)}
      >
        <p>{activeText}</p>
        <img
          src={img}
          alt="<"
          style={active ? { transform: 'rotate(90deg)' } : {}}
        />
      </div>
      {active && (
        <div
          className={styles.selectBlock__activeBlock}
          onClick={() => setActive(!active)}
        >
          {select?.map((sel) => (
            <p onClick={() => setActiveText(sel.name)} key={sel.id}>
              {sel.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selects;
