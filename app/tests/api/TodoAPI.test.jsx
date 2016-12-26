
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

  describe('setTodos', ()=>{

    it('should add item to the local storage on valid input',()=>{
      var validTodoArray = [{id:1,text:"test", completed:false}];
      TodoAPI.setTodos(validTodoArray);

      var actual = JSON.parse(localStorage.getItem('todos'));
      expect(actual).toEqual(validTodoArray);
    });

    it('should not add item to the local storage on invalid input',()=>{
      var invalidTodoData = {id:1,text:'test'};
      TodoAPI.setTodos(invalidTodoData);

      var actual = localStorage.getItem('todos');

      expect(actual).toBe(null);
    });
  });

  describe('getTodos', ()=>{
    it('should return a non empty array when there are valid data', ()=>{
      var validTodoData = [{id:1, text:'test', completed:false}];

      localStorage.setItem('todos', JSON.stringify(validTodoData));

      var actual = TodoAPI.getTodos();
      expect(TodoAPI.getTodos()).toEqual(validTodoData);
    });

    it('should return an empty array when there are invalid data', ()=>{
      var invalidTodoData = {id:1, text:'test', completed:false};

      localStorage.setItem('todos', JSON.stringify(invalidTodoData));

      var actual = TodoAPI.getTodos();
      var expected = [];
      expect(actual).toEqual(expected);
    });

  });




});
