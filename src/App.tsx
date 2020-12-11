import React from 'react';
import ToDoInput from "./ToDoInput"
import TodoItem from "./TodoItem"

class App extends React.Component {
    state: { todos: any[] }
        constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
          todos: []
      }
    this.handleChange = this.handleChange.bind(this)
    this.addTask = this.addTask.bind(this)
    this.itemDelited = this.itemDelited.bind(this)
    }

    handleChange(id: any) {
      this.setState((prevState: { todos: any[] }) => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.id === id) {
                  todo.completed = !todo.completed
              }
              return todo
          })
          return {
              todos: updatedTodos
          }
      })
  }

    addTask(item: string) {
        if (item !== '') {
            let comments = this.state.todos;
            comments.push({text: item, completed: false, id: comments.length + 1, deleted: false});
            this.setState( {
                comment : comments 
            }) 
          item = '';
      }
    }
    
    itemDelited(id: any) {
      this.setState((prevState: { todos: any[] }) => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id && todo.deleted === false) {
                todo.deleted = !todo.deleted
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem 
          key={item.id} 
          item={item} 
          handleChange={this.handleChange}
          itemDelited={this.itemDelited}
          />)
        
        return (
            <div>
              <ToDoInput addTask={this.addTask}/>
              <div className="todo-list">
                 {todoItems}
              </div>
            </div>
        )    
    }
}

export default App