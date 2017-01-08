var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');


describe('Reducers', ()=>{
  describe('searchTextReducer', ()=>{
    it('should set searchText', ()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });


  describe('showCompletedReducer', ()=>{
    it('should toggle showCompleted', ()=>{
      var action = {
        type : 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

describe('todosReducer', ()=>{

  it('should add todo', ()=>{
    var action = {
      type:'ADD_TODO',
      todo: {id:'dddd', text: 'Test todo', completed:false, completedAt:null, createdAt:500}
    };

    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toBe(1);
    expect(res[0]).toEqual(action.todo);

  });

  it('should add existing todos', ()=>{
    var todos=[
      {
        id:1,
        text:'one',
        completed:false,
        completedAt:undefined,
        createdAt:100
      },
      {
        id:2,
        text:'two',
        completed:false,
        completedAt:undefined,
        createdAt:200
      },
      {
        id:3,
        text:'three',
        completed:false,
        completedAt:undefined,
        createdAt:300
      }
    ];

    var action = {
      type:'ADD_TODOS',
      todos
    };

    var res =  reducers.todosReducer(df([]), df(action));
    expect(res.length).toBe(todos.length);
    expect(res[0]).toEqual(todos[0]);
  });

  it('should toggle todo completed',()=>{
    var action = {
      type:'UPDATE_TODO',
      id:2,
      updates:{completed:true,completedAt:5002}
    }

    var todos = [
      {id:1,text:'dog',completed:false,completedAt:undefined,createdAt:3332344},
      {id:2,text:'cat',completed:false,completedAt:undefined,createdAt:2343234}
    ];

    var res = reducers.todosReducer( df(todos), df(action) );

    expect(res[1].completed).toBe(true);
    expect(res[1].completedAt).toBeA('number');
    expect(res[1].text).toBe(todos[1].text);
  });



});




});
