var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
// var TodoApp = require('TodoApp');
import {TodoApp} from 'TodoApp';
// var TodoList = require('TodoList');
import TodoList from 'TodoList';

describe('Todo App', ()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });

  it('should render TodoList component', ()=>{
    var store = configureStore.configure();

    var provider = TestUtils.renderIntoDocument(<Provider store={store}><TodoApp/></Provider>);

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toBe(1);
  });


});
