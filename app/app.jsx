var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var store = require('configureStore').configure();
var actions = require('actions');
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todo');
  }else{
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});


store.dispatch(actions.startAddTodos());

//loading foundation
$(document).foundation();
//application css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <div>
    <Provider store={store}>
      {router}
    </Provider>
  </div>,
  document.getElementById('app')
);
