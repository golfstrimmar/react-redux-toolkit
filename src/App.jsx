import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

const addTodo =()=>{
  if (text.trim().length) {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        completed: false,
      },
    ]);
    setText("")
  }
}

const removeTodo = (todoId) =>{
setTodos(todos.filter((todo) => todo.id !==todoId));
}

const togleToDoComplited = (todoId) => {
  setTodos(
    todos.map((todo) => {
      if (todo.id !== todoId) return todo;
      return {
        ...todo,
        completed: !todo.completed,
      };
    })
  );
};

  return (
    <div className="App">
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}> add todo </button>
      </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {togleToDoComplited(todo.id)}}
            />
            <span>{todo.text}</span>
            <span className="delite" onClick={() => removeTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
