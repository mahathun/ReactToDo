var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {TodoSearch} = require('TodoSearch');

describe('TodoSearch', ()=>{
  it('should exist', ()=>{
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT with entered input text', ()=>{
    var searchText = "dog";
    var spy = expect.createSpy();
    var action = {
      type : 'SET_SEARCH_TEXT',
      searchText
    }
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.searchText.value = searchText;

    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);

  });

  it('should dispatch TOGGLE_SHOW_COMPLETED  action with proper checked value', ()=>{
    var checkedValue = true;
    var action = {
      type:'TOGGLE_SHOW_COMPLETED'
    }
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.showCompleted.checked = checkedValue;

    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);

  });

});
