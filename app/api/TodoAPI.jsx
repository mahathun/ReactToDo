
module.exports = {
  setTodos:function (todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  },
  getTodos:function () {
    var todosString = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(todosString);
    } catch (e) {

    }

    return $.isArray(todos)?todos:[];
  }
};
