import React from "react";

import Todo from "./Todo"

class TodoList extends React.Component {
  render(){
    return (
      <div>
        {this.props.todoList.map(item => (
          <Todo id={item.id} item={item} tog={this.props.tog}/>
        ))}
      </div>
    )
  }
}

export default TodoList;