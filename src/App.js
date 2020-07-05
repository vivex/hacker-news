import React from 'react';
import { Provider } from 'react-redux';

import Layout from './modules/Common/Layout';
import NewsList from "./modules/News/NewsList.component";

import './App.css';

function App(props) {
  return (
    <Provider store={props.store}>
      <Layout>
        <NewsList/>
      </Layout>
    </Provider>
  );
}

export default App;
