// var redux = require('redux');
import * as redux from 'redux';
import thunk from 'redux-thunk';
var {showCompletedReducer, searchTextReducer, todosReducer, authReducer} = require('reducers');

export var configure = (initialState={})=>{
  var reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    searchText: searchTextReducer,
    todos:todosReducer,
    auth:authReducer,
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension(): f=>f
  ));

  return store;
};
