import React from 'react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import {
  Battle,
  CharacterSelect,
  EndMenu,
  StartMenu,
  SelectSai,
  SelectChi,
  SelectTy,
  Selectghoul,
} from 'components';

export const App = () => {
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
    <div className={styles.main}>
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('character')} />
      )}

      {mode === 'character' && (
        <CharacterSelect
          onSaiClick={() => setMode('selectSai')}
          onChiClick={() => setMode('selectChi')}
          onTyClick={() => setMode('selectTy')}
        />
      )}

      {mode === 'selectSai' && (
        <SelectSai onContinue={() => setMode('ghoul')} />
      )}

      {mode === 'selectChi' && (
        <SelectChi onContinue={() => setMode('ghoul')} />
      )}

      {mode === 'selectTy' && (
        <SelectTy onContinue={() => setMode('ghoul')} />
      )}

      {mode === 'ghoul' && (
        <Selectghoul
          onOrbClick={() => setMode('battle')}
          onGhoulClick={() => setMode('battle')}
          onKingClick={() => setMode('battle')}
        />
      )}

      {mode === 'battle' && (
        <Battle
          onGameEnd={winner => {
            setWinner(winner);
            setMode('gameOver');
          }}
        />
      )}

      {mode === 'gameOver' && !!winner && (
        <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
      )}
    </div>
  );
};
