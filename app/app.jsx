var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var store = require('configureStore').configure();
var actions = require('actions');


store.subscribe(()=>{
  console.log("The new state is : ", store.getState());
});


store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//loading foundation
$(document).foundation();
//application css
require('style!css!sass!applicationStyles');



ReactDOM.render(
  <div>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </div>,
  document.getElementById('app')
);
