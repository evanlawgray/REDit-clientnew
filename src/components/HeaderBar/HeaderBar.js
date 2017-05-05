import React from 'react';

import styles from './styles.css';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const buttonStyles = { color: 'white', marginBottom: '15px', textTransform: 'uppercase' };

const HeaderBar = () => (
  <AppBar
    className={styles.headerBar}
    title="RED it"
    iconElementRight={
      <div>
        <FlatButton label="Share a New Link" style={buttonStyles} />
        <FlatButton label="Login" style={buttonStyles} />
      </div>
    }
  />
);

export default HeaderBar;
