var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  render:function(){
    var {id, text, completed, createdAt, completedAt} = this.props;


    var renderDate = ()=>{
      var timestamp =0;
      var message = "";
      if(completed){
        var message ="Completed at: ";
        timestamp = completedAt;
      }else{
        var message = "Created at: ";
        timestamp = createdAt;
      }
      return message+moment.unix(timestamp).format("Do MMMM Y @ h:mm a");
    }


    return (
      <div className="row todo" onClick={()=>{this.props.onToggle(id);}}>

          <div className="column small-1 todo-checkbox">
            <input type="checkbox"  checked={completed}/>
          </div>
          <div className=" column small-11 todo-text-container">
            <div className="todo-text">{text}</div>
            <div className="todo-datetime">
              {renderDate()}
            </div>
          </div>

      </div>
    );
  }
});

module.exports = Todo;
