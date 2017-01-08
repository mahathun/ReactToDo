var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {Todo} = require('Todo');

describe('Todo', ()=>{
  it('should exist', ()=>{
    expect(Todo).toExist();
  });

  it('should dispatch UPDATE_TODO action with proper id on click',()=>{
    var todoData = {
      id:10,
      text:'test',
      completed:false
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(todo));
    var action = actions.startToggleTodo(todoData.id, !todoData.completed)

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });


});
