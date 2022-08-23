import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PostsNew from "./components/posts-new";
import PostsShow from "./components/posts-show";
import PostsIndex from "./components/posts-index";
import Header from "./components/header";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/posts/:id' component={PostsShow} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);