import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export const Routes: React.FC = () => {
  return (
      <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/signup" component={SignUp} />
      </Switch>
  );
}