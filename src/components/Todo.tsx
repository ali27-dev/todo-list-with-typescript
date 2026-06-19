import React, { useState } from "react";
import "./TodoStyle.css";

interface TodoProps {
  todos: string[];
  addTodo: (todo: string) => void;
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

function Todo({ todos, addTodo, setTodos }: TodoProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  function handleDeleteTodo(index: number) {
    // create a new array (do not mutate props) and update via the provided setter
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  }

  return (
    <div className="todo-container">
      <h1 className="h1">Todo Item</h1>

      <div className="input-row">
        <input
          className="input"
          type="text"
          placeholder="Add your todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button add" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <ul className="todos-ul">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <label className="todo-label">
              <input
                type="checkbox"
                className="todo-checkbox"
                aria-label={`complete ${todo}`}
              />
              <span className="todo-text">{todo}</span>
            </label>
            <button
              className="button delete"
              onClick={() => handleDeleteTodo(index)}
              aria-label={`delete ${todo}`}
            >
              Delete
            </button>
          </li>
        ))}
        <button className="button delete" onClick={() => setTodos([])}>
          Delete All
        </button>
      </ul>
    </div>
  );
}

export default Todo;
