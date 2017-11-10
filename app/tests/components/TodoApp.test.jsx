var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todos to the todo state on handleAddTodo',()=>{
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    //createdAt is set to a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed state on handleToggle',()=>{
    var todoData = {
      id:11,
      text:'todo text',
      completed:false,
      createdAt:0,
      completedAt:undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(todoApp.state.todos[0].id);

    expect(todoApp.state.todos[0].completed).toBe(true);
    //Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  //what happens when toggle from completed to none undefined date
    it('should toggle completedAt to undefined on handleToggle',()=>{
    var todoData = {
      id:11,
      text:'todo text',
      completed:true,
      createdAt:0,
      completedAt:0
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[todoData]});

    todoApp.handleToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });
});
