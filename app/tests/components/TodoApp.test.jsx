var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('Todo App', ()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', ()=>{
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', ()=>{
    var todoData = {
      id:10,
      text:"test",
      completed:false,
      completedAt:undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });

  it('should completedAt returns an undefined when toggle from completed to incomplete',()=>{
    var todoData = {
      id:1,
      text:'todo text',
      completed: true,
      completedAt:1232132
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[todoData]});
    expect(todoApp.state.todos[0].completed).toBe(true)
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);

  });


});
