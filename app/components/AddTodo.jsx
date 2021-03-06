var React = require('react');
var TodoApp = require('TodoApp');

var AddTodo = React.createClass({
  handleSubmit: function (e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <div id="addtodo-container">
        <input type="text" ref="todoText" placeholder="What do you need to do?"/>
        <a id="arrow"><img src="/images/arrow.png" /></a>
        </div>
      </form>
    </div>
    )
  }
});

module.exports = AddTodo;
