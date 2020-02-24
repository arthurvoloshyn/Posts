import React from 'react';
import {Route, Switch} from 'react-router-dom'
import MainPage from "../main-page";
import Header from "../header";
import Edit from "../edit";
import SinglePost from "../single-post";


const conf = [
  {
    id: 0,
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    id: 1,
    path: '/edit/',
    component: Edit,
    exact: true,
  },
  {
    id: 2,
    path: '/:id',
    component: SinglePost,
    exact: true,
  },
]

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        {conf.map(conf => {
          return (
            <Route
              key={conf.id}
              path={conf.path}
              component={conf.component}
              exact={conf.exact}
            />
          )
        })}
      </Switch>
    </div>
  )

}

export default App;