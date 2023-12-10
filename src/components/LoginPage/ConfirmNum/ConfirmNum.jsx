import React, { useRef } from 'react';
import styles from './ConfirmNum.module.scss';
import { checkNum } from '../../../store/reducers/postRequestSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { chnageAlertText } from '../../../store/reducers/EditDataUser';

const ConfirmNum = ({ setEndTime, endTime, time, setTime }) => {
  const [seconds, setSeconds] = React.useState(0);
  const { dataUser } = useSelector((state) => state.accountSlice);
  const { checkAuth } = useSelector((state) => state.postRequestSlice);
  const [code, setCode] = React.useState(['', '', '', '']);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  React.useEffect(() => {
    setSeconds(179);
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0));
      setTime(formatTime(seconds)); // Оставшееся время

      if (seconds === 0) {
        // Таймер завершен.
        clearInterval(intervalId);
        setTime('00:00');
        setEndTime(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  const handleInputChange = (index, value) => {
    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1].current.focus();
    }

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);
  };

  React.useEffect(() => {
    if (+checkAuth === 1) {
      navigate('/welcome');
    }
    // console.log(checkAuth, 'checkAuth');
  }, [checkAuth]);

  const confirmNum = (e) => {
    e.preventDefault();
    if (code?.join('')?.length === 4) {
      dispatch(checkNum({ code, dataUser }));
    } else {
      dispatch(
        chnageAlertText({
          text: 'Введите все четыре символа',
          backColor: 'red',
          state: true,
        })
      );
    }
  };

  return (
    <div>
      <form className={styles.formConfirm} onSubmit={confirmNum}>
        <div>
          {code.map((text, index) => (
            <input
              key={index}
              type="text"
              placeholder="0"
              value={text}
              maxLength={1}
              onChange={(e) => handleInputChange(index, e.target.value)}
              ref={inputRefs.current[index]}
            />
          ))}
        </div>
        <button type="submit" className="standartBtn">
          Подтвердить
        </button>
        <label>
          Код отправлен на ваш номер. Повторная отправка через
          <span>{time}</span>
        </label>
      </form>
    </div>
  );
};

export default ConfirmNum;
