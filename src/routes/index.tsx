import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import List from '../pages/List';
import GameOver from '../pages/GameOver';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/list" component={List} />
    <Route path="/game-over" component={GameOver} />
  </Switch>
);

export default Routes;
