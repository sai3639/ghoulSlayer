import { useState } from 'react';
import styles from './styles.module.css';

import React from 'react';
export const CharacterSelect = ({ onSaiClick, onChiClick, onTyClick }) => {
  return (
    <div className={styles.main}>
      <div>
        <img src="/assets/selectHero.png" />
      </div>
      <button className={styles.saiButton} onClick={onSaiClick}>
        <img src="/assets/saiSelect.png" />
      </button>
      <button className={styles.chiButton} onClick={onChiClick}>
        <img src="/assets/chiSelect.png" />
      </button>
      <button className={styles.tyButton} onClick={onTyClick}>
        <img src="/assets/tySelect.png" />
      </button>
    </div>
  );
};
