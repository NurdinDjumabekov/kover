import React from 'react';
import './DetailedEveryData.scss';
import Modals from '../../Modals/Modals';

const DetailedEveryData = (props) => {
  return (
    <Modals
      state={props.state}
      title={'Редактирование профиля'}
      changeState={props.changeState}
    >
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <p></p>
        
      </div>
    </Modals>
  );
};

export default DetailedEveryData;
