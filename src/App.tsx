import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };
  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;
