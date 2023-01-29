import styles from './styles.module.css';
import React from 'react';

export const StartMenu = ({ onStartClick }) => {
  return (
    <div className={styles.main}>
      <button className={styles.startButton} onClick={onStartClick}>
        <img src="/assets/startButton.png" />
      </button>
    </div>
  );
};
