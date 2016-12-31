var actions = require('actions');
var expect = require('expect');
var moment = require('moment');

describe('Actions', ()=>{
  it('should generate the searchText action', ()=>{
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText: 'dog'
    };

    var actual = actions.setSearchText('dog');

    expect(actual).toEqual(action);
  });

  it('should generate the addTodo action', ()=>{
    var action = {
      type:'ADD_TODO',
      text: 'test todo'
    };
    expect(actions.addTodo(action.text)).toEqual(action);
  });

  it('should generate toggleShowCompleted action', ()=>{
    var action = {
      type:"TOGGLE_SHOW_COMPLETED"
    };
    expect(actions.toggleShowCompleted()).toEqual(action);
  });

  it('should generate toggleTodo action', ()=>{
    var action = {
      type: 'TOGGLE_TODO',
      id: 5
    };

    expect(actions.toggleTodo(action.id)).toEqual(action);
  });


});
