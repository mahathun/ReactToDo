var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// var TodoApp = require('TodoApp');
import TodoApp from 'TodoApp';
var TodoAPI = require('TodoAPI');
import Login from 'Login';

// var store = require('configureStore').configure({todos:TodoAPI.getTodos()});
var store = require('configureStore').configure();
var actions = require('actions');



// store.subscribe(()=>{
//   var state = store.getState();
//   console.log("The new state is : ", state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();

// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//loading foundation
$(document).foundation();
//application css
require('style!css!sass!applicationStyles');



ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/">
          <Route path="todo/" component={TodoApp}/>
          <IndexRoute component={Login} />
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('app')
);
