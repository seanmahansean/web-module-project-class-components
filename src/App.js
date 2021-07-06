import React from 'react';

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {list: []};
  }

  addItem = (todoName) => {
    const newItem = {
      task : todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({list: [...this.state.list, newItem]})
  }

  clearCompleted = () => {
    const newList = this.state.list.filter(item => !item.completed)
    this.setState({list: newList})
  }

  toggleCompleted = (id) => {
    const newList = this.state.list.map(item => {
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    });
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList todoList={this.state.list} tog={this.toggleCompleted}/>
        <TodoForm todoList={this.state.list} addItem={this.addItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
