import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { conf } from '../../constants';

import Header from '../../containers/header';

const Posts = () => (
  <>
    <Header />
    <Switch>
      {conf.map(({ id, path, component, exact }) => (
        <Route key={id} path={path} component={component} exact={exact} />
      ))}
    </Switch>
  </>
);

export default Posts;
