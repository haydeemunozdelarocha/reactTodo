var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',()=>{
  it('should exist',()=>{
    expect(TodoAPI).toExist();
  })
  describe('setTodos',()=>{
    beforeEach(()=>{
      localStorage.removeItem('todos');
    });
    it('should set valid todos array',()=>{
      var todos = [{
        id:23,
        text:'test all files',
        completed:false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    })
    it('should not set invalid todos array',()=>{
      var badTodos = {
        a:'b'
      };

      TodoAPI.setTodos(badTodos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toBe(null);
    })
  });

  describe('getTodos',()=>{
    it('should return empty array for bad local storage data',()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    })
    it('should return array for local storage data',()=>{
      var todos = [{
        id:23,
        text:'test all files',
        completed:false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    })
});

    describe('filteredTodos',()=>{
      var todos = [{
        id:1,
        text:'some text',
        completed:true
      },{
        id:2,
        text:'other text',
        completed:false
      },{
        id:3,
        text:'some text',
        completed:true
      }];
    it('should return all items if showCompleted is true',()=>{
      var filteredTodos = TodoAPI.filteredTodos(todos,true,'');
      expect(filteredTodos.length).toBe(3);
    })
    it('should return only not completed items if showCompleted is false',()=>{
      var filteredTodos = TodoAPI.filteredTodos(todos,false,'');
      expect(filteredTodos.length).toBe(1);
    })
    it('should sort by completed status',()=>{
      var filteredTodos = TodoAPI.filteredTodos(todos,true,'');
      expect(filteredTodos[0].completed).toBe(false);
    })
      it('should filter todos by searchtext',()=>{
      var filteredTodos = TodoAPI.filteredTodos(todos,true,'some');
      expect(filteredTodos.length).toBe(2);
    })
   it('should return all todos if search text is empty',()=>{
      var filteredTodos = TodoAPI.filteredTodos(todos,true,'');
      expect(filteredTodos.length).toBe(3);
    })
});
  });
