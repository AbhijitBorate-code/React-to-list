import React from "react";

function TodoCard(props) {
  const { children , onDelete , onEdit} = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={onEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={onDelete}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
