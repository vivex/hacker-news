import React from 'react';
import { Provider } from 'react-redux';

import Layout from './modules/Common/Layout';
import NewsList from "./modules/News/NewsList.component";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';

import './main.scss';

function App(props) {
  const routes = (
    <Layout>
      <Switch>
        <Route path="/" component={NewsList} exact strict={false}/>
      </Switch>
    </Layout>
  );
  return (
    <Provider store={props.store}>
      {
        props.location
          ? (
            <StaticRouter location={props.location} context={{}}>
              {routes}
            </StaticRouter>
          ) : (
            <BrowserRouter>
              {routes}
            </BrowserRouter>
          )
      }
    </Provider>
  );
}

export default App;
