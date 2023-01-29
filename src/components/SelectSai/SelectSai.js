import styles from './styles.module.css';
import React from 'react';

export const SelectSai = ({ onContinue }) => {
  return (
    <div className={styles.main}>
      <button className={styles.continueButton} onClick={onContinue}>
        <img src="/assets/continueSai.png" />
      </button>
      <div>
        <img src="/assets/saiHighlight.png" />
      </div>
    </div>
  );
};
