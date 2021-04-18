import React from 'react';
import { useHistory } from 'react-router-dom';

const GameOver: React.FC = () => {
  const history = useHistory();

  const handleReload = () => {
    history.push('/list')
  };

  return (
    <h1>Game Over</h1>
  );
};

export default GameOver;
