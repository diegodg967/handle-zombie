import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { Container, Logo } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const handleStart = () => {
    history.push('/list')
  };

  return (
    <Container>
      <Logo>handle<strong>Zombie</strong>( )</Logo>
      <Button onClick={handleStart}>Start</Button>
    </Container>
  );
};

export default Home
