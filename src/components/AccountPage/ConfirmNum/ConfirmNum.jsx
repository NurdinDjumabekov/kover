import React, { useRef } from 'react';
import './ConfirmNum.scss';
import Modals from '../../Modals/Modals';
import CheckNums from '../CheckNums/CheckNums';

const ConfirmNum = (props) => {
  const [seconds, setSeconds] = React.useState(0);
  const [time, setTime] = React.useState('03:00');
  const [endTime, setEndTime] = React.useState(true);
  //   console.log(time);

  React.useEffect(() => {
    setSeconds(179);
  }, [props.state]);

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

  const sendAgainData = (e) => {
    e.preventDefault();
    setTime('03:00');
    setEndTime(true);
    setSeconds(179);
  };

  return (
    <Modals
      state={props.state}
      title={'Подтверждение номера телефона'}
      changeState={props.changeState}
    >
      <div className="confirmNum">
        <form>
          {/* <CheckNums /> */}
          <div>
            <input type="text" placeholder="0" />
            <input type="text" placeholder="0" />
            <input type="text" placeholder="0" />
            <input type="text" placeholder="0" />
          </div>
          {endTime ? (
            <button disabled={endTime} type="submit" className="standartBtn">
              Подтвердить
            </button>
          ) : (
            <button
              disabled={endTime}
              type="submit"
              className="standartBtn"
              onClick={sendAgainData}
            >
              Отправить еще раз
            </button>
          )}
          <label>
            Код отправлен на ваш номер. Повторная отправка через
            <span>{time}</span>
          </label>
        </form>
      </div>
    </Modals>
  );
};

export default ConfirmNum;
