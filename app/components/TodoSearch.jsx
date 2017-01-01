var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var TodoSearch = React.createClass({

  render:function () {
    var {dispatch,searchText,showCompleted} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="text" ref="searchText" value={searchText} placeholder="Search todos" onChange={()=>{
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
              dispatch(actions.toggleShowCompleted());
            }} />
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
});

export default connect((state)=>{
  return{searchText:state.searchText,
  showCompleted:state.showCompleted}
})(TodoSearch);
