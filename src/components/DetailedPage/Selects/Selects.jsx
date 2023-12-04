import React from 'react';
import styles from './Selects.module.scss';
import img from '../../../assets/icons/backBtn.svg';
const Selects = ({ select, setSelect }) => {
  const [activeText, setActiveText] = React.useState(select?.[0]?.name);
  const [active, setActive] = React.useState(false);
  const accordionRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutsideAccordion = (e) => {
      if (
        active &&
        accordionRef.current &&
        !accordionRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener('click', handleClickOutsideAccordion);

    return () => {
      document.removeEventListener('click', handleClickOutsideAccordion);
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
          {select?.map((sel) => (
            <p
              onClick={() => {
                setActiveText(sel.name);
                setActive(false);
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

export default Selects;
