import styles from './styles.module.css';
import React from 'react';

export const Selectghoul = ({ onOrbClick, onGhoulClick, onKingClick }) => {
  return (
    <div className={styles.main}>
      <div>
        <img src="/assets/ghouldiff.png" />
      </div>

      <button className={styles.orbButton} onClick={onOrbClick}>
        <img src="/assets/orbButton.png" />
      </button>
      <button className={styles.ghoulButton} onClick={onGhoulClick}>
        <img src="/assets/ghoulButton.png" />
      </button>
      <button className={styles.kingButton} onClick={onKingClick}>
        <img src="/assets/kingButton.png" />
      </button>
    </div>
  );
};
