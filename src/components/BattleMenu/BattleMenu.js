import styles from './styles.module.css';
import React from 'react';

export const BattleMenu = ({ onA1, onA2, onA3 }) => (
  <div className={styles.main}>
    <div onClick={onA1} className={styles.option}>
      A1
    </div>
    <div onClick={onA2} className={styles.option}>
      A2
    </div>
    <div onClick={onA3} className={styles.option}>
      A3
    </div>
  </div>
);
