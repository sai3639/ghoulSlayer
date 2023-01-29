import styles from './styles.module.css';
import { Bar } from 'components';
import React from 'react';

const red = '#821200';
const blue = '#1953cb';

export const PlayerSummary = ({
  main = false,
  name,
  health,
  maxHealth,
}) => {
  return (
    <div
      style={{ backgroundColor: main ? red : blue }}
      className={styles.main}
    >
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
      </div>

      <div className={styles.health}>
        <Bar label="HP" value={health} maxValue={maxHealth} />
      </div>
    </div>
  );
};
