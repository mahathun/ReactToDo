var React = require('react');
var {connect} = require('react-redux');
// var Todo = require('Todo');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({

  render:function(){

    var {todos, searchText, showCompleted} = this.props;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    // var filteredTodos = todos.filter((todo)=>{
    //   return showCompleted || !todo.completed;
    // });
    //
    // filteredTodos = filteredTodos.filter((todo)=>{
    //   if(searchText){
    //     var lowerCaseSearchText = searchText.toLowerCase();
    //     if(todo.text.match(lowerCaseSearchText)){
    //       return true;
    //     }else{
    //       return false;
    //     }
    //   }else{
    //     return true;
    //   }
    // });

    var renderTodos = ()=>{
      if(filteredTodos.length==0){
        return (<p className="container__message">Nothing to do.</p>);
      }else{
        return filteredTodos.map((todo)=>{
          return (
            <Todo key={todo.id} {...todo}/>
          )
        });
      }
    }


    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect((state)=>{
  return {
    showCompleted:state.showCompleted,
    searchText:state.searchText,
    todos:state.todos
  }
})(TodoList);
