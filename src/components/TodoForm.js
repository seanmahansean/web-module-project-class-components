import React from "react";

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      newItem: ""
    }
  }

  handleChanges = e => {
    this.setState({
      newItem: e.target.value
    })
  }

  handleSubmitAdd = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem)
    this.setState({newItem: ""})
  }

  handleSubmitClear = e => {
    e.preventDefault();
    this.props.clearCompleted()
  }

  render(){
    return (
      <form>
        <input type="text" onChange={this.handleChanges}/>
        <button onClick={this.handleSubmitAdd}>Add Item</button>
        <button onClick={this.handleSubmitClear}>Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm;