import { useState, useEffect } from "react";

const Todoinputs = ({ handleAddTodoList, editvalue }) => {
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    if (editvalue) {
      setTodoInput(editvalue);
    }
  }, [editvalue]);

  const handleSubmit = () => {
    if (todoInput.trim() !== '') {
      handleAddTodoList(todoInput);
      setTodoInput('');
    }
  };

  return (
    <header>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter Todo ..."
      />
      <button onClick={handleSubmit}>Add</button>
    </header>
  );
};

export default Todoinputs;
