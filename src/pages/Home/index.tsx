import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import GlobalStyle, { Wrapper, Container, Grid } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const handleStart = () => {
    history.push('/list')
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Grid />
        <Grid>
          <Logo>handle<strong>Zombie</strong>( )</Logo>
        </Grid>
        <Grid>
          <Button onClick={handleStart}>Start</Button>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Home;
