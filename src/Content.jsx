import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Store from './pages/Store';
import Cart from './pages/Cart';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/test/" component={Store} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};

export default Content;
