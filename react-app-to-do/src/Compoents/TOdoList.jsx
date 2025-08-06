import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todo, handleDelete , handleEdit }) => {


  return (
    <ul className="main">
      {todo.map((res, index) => (
        <TodoCard key={index} onDelete={() => handleDelete(index)} onEdit={()=> handleEdit(index)}>
          <p>{res}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
