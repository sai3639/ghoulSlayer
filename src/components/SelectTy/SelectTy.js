import styles from './styles.module.css';
import React from 'react';
export const SelectTy = ({ onContinue }) => {
  return (
    <div className={styles.main}>
      <button className={styles.continueButton} onClick={onContinue}>
        <img src="/assets/continueTy.png" />
      </button>
      <div className="highlight">
        <img src={'/assets/tyHighlight.png'} />
      </div>
    </div>
  );
};
