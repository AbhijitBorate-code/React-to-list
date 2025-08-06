import { useState, useEffect } from "react"; // ✅ Add useEffect
import "./App.css";
import Todoinputs from "./Compoents/TOdoinputs";
import TodoList from "./Compoents/TOdoList";

function App() {
  const [todoList, setTodoList] = useState([
    "go to gym",
    "i have to Go school",
    "Play time",
  ]);

  const [editvalue, setEditvalue] = useState("");

  const handleAddTodoList = (newTodo) => {
    const updatedList = [...todoList, newTodo];
    setTodoList(updatedList);
    localStorage.setItem("todos", JSON.stringify({ todos: updatedList }));
  };

  const handleDelete = (itemIndex) => {
    const newTodo = todoList.filter((_, index) => index !== itemIndex);
    setTodoList(newTodo);
    localStorage.setItem("todos", JSON.stringify({ todos: newTodo }));
  };

  const handleEdit = (itemIndex) => {
    const newTodo = todoList[itemIndex];
    setEditvalue(newTodo);
    handleDelete(itemIndex);
  };

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      const parsed = JSON.parse(localTodos);
      if (parsed?.todos) {
        setTodoList(parsed.todos);
      }
    }
  }, []);

  return (
    <main>
      <Todoinputs handleAddTodoList={handleAddTodoList} editvalue={editvalue} />

      <TodoList
        todo={todoList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </main>
  );
}

export default App;
