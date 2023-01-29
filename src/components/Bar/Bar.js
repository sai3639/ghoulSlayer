import styles from './styles.module.css';
import React from 'react';
export const Bar = ({ label, value, maxValue }) => {
  return (
    <div className={styles.main}>
      <div className={styles.label}>{label}</div>
      <div className={styles.max}>
        <div
          className={styles.value}
          style={{ width: `${(value / maxValue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
