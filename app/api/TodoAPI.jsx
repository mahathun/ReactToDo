
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
  },
  filterTodos:function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    })

    //filter by searchText
    filteredTodos = filteredTodos.filter((todo)=>{
      return todo.text.toLowerCase().match(searchText)
    });

    //sort todos with non-completed first
    filteredTodos = filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      }else if (a.completed && !b.completed) {
        return 1;
      }else{
        return 0;
      }
    });


    return filteredTodos;

  }
};
