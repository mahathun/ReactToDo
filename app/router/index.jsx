import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import firebase from 'app/firebase/'
import TodoApp from 'TodoApp';
import Login from 'Login';


var requireLogin = (nextState, replace ,next) =>{
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

var userLoggedIn = (nextState, replace ,next) =>{
  if(firebase.auth().currentUser){
    replace('/todo');
  }
  next();
};


export default (
  <Router history={hashHistory} >
    <Route path="/" >
      <Route path="todo" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={userLoggedIn}/>
    </Route>
  </Router>
);
