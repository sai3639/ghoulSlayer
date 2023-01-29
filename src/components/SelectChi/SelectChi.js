import styles from './styles.module.css';
import React from 'react';

export const SelectChi = ({ onContinue }) => {
  return (
    <div className={styles.main}>
      <button className={styles.continueButton} onClick={onContinue}>
        <img src="/assets/continueChi.png" />
      </button>
      <div>
        <img src="/assets/chiHighlight.png" />
      </div>
    </div>
  );
};
