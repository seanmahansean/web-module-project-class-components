import React from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.tog(props.id)
  }

  return(
    <div onClick={handleClick}>
      <p>{!props.item.completed ? props.item.task : <del>{props.item.task}</del>}</p>
    </div>
  )
}

export default Todo;