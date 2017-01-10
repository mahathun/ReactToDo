
var expect = require('expect');
var $ = require('jQuery');


var TodoAPI = require('TodoAPI');

describe('API', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

  it('should exist', ()=>{
    expect(TodoAPI).toExist();
  });

  // describe('setTodos', ()=>{
  //
  //   it('should add item to the local storage on valid input',()=>{
  //     var validTodoArray = [{id:1,text:"test", completed:false}];
  //     TodoAPI.setTodos(validTodoArray);
  //
  //     var actual = JSON.parse(localStorage.getItem('todos'));
  //     expect(actual).toEqual(validTodoArray);
  //   });
  //
  //   it('should not add item to the local storage on invalid input',()=>{
  //     var invalidTodoData = {id:1,text:'test'};
  //     TodoAPI.setTodos(invalidTodoData);
  //
  //     var actual = localStorage.getItem('todos');
  //
  //     expect(actual).toBe(null);
  //   });
  // });
  //
  // describe('getTodos', ()=>{
  //   it('should return a non empty array when there are valid data', ()=>{
  //     var validTodoData = [{id:1, text:'test', completed:false}];
  //
  //     localStorage.setItem('todos', JSON.stringify(validTodoData));
  //
  //     var actual = TodoAPI.getTodos();
  //     expect(TodoAPI.getTodos()).toEqual(validTodoData);
  //   });
  //
  //   it('should return an empty array when there are invalid data', ()=>{
  //     var invalidTodoData = {id:1, text:'test', completed:false};
  //
  //     localStorage.setItem('todos', JSON.stringify(invalidTodoData));
  //
  //     var actual = TodoAPI.getTodos();
  //     var expected = [];
  //     expect(actual).toEqual(expected);
  //   });
  //
  // });

  describe('filterTodos', ()=>{
    var todos = [
      {id:1,text:"completed todo",completed:true},
      {id:2,text:"incompleted todo",completed:false},
      {id:2,text:"completed todo",completed:true}
    ];

    it('should return all todos if showCompleted is true', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only incompleted todos if showCompleted is false', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort todos so that incompleted todos come first', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos,true,'');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should only show todos which matches with the searchText', ()=>{
      var searchText = "incompleted";
      var filteredTodos = TodoAPI.filterTodos(todos,true,searchText);

      expect(filteredTodos.length).toBe(1);
    });

    it('should show all todos for empty searchText', ()=>{
      var searchText = "";
      var filteredTodos = TodoAPI.filterTodos(todos, true, searchText);

      expect(filteredTodos.length).toBe(3);
    });


  });




});
