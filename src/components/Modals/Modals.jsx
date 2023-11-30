import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import styles from './Modals.module.scss';
import krest from '../../assets/icons/krest.svg';

const Modals = (props) => {
  const toggleDrawer = () => {
    props.changeState(!props.state);
  };

  const close = () => {
    props.changeState(false);
  };

  return (
    <div className={styles.modal}>
      <Drawer
        PaperProps={{
          sx: {
            borderRadius: '20px 20px 0px 0px',
          },
        }}
        anchor="bottom"
        open={props.state}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 'auto' }}
          role="presentation"
          //   onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <div className={styles.modal__inner}>
              <div className="container">
                <div className={styles.mainBlock}>
                  <h6>{props.title}</h6>
                  <button onClick={close}>
                    <img src={krest} alt="x" />
                  </button>
                </div>
                {props.children}
              </div>
            </div>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Modals;
