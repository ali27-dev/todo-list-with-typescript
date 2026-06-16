import React, { useState } from "react";
import "./TodoStyle.css";

interface TodoProps {
  todos: string[];
  addTodo: (todo: string) => void;
}

function Todo({ todos, addTodo }: TodoProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  function handleDeleteTodo(index: number) {
    // Implement delete functionality here
    todos.splice(index, 1);
    addTodo([...todos]);
  }

  return (
    <div>
      <h1 className="h1">Todo Item</h1>
      <input
        className="input"
        type="text"
        placeholder="add your todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button" onClick={handleAddTodo}>
        Add todo
      </button>
      <ul className="todos-ul">
        {todos.map((todo, index) => (
          <>
            <input type="checkbox" />
            <li key={index}>{todo}</li>
            <button className="button" onClick={() => handleDeleteTodo(index)}>
              delete
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
