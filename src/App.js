import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadTodos } from "./action";

function App() {
  const todos = useSelector((state) => state);
  const [todo, setTodo] = useState(todos);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(LoadTodos());
  }, [dispatch]);

  const checkboxChange = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };



  return (
    <div className="container">
      <div className="todo">
        <div className="todo-subtitle">
          <h1>Todo List</h1>
        </div>

        <div className="todo-style">
          {todo.map((item) => (
            <div className="todo-style__title" key={item.id}>
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                <p>{item.title}</p>
              </span>
              <div className="button-input">
                <button
                  className="btn-delete"
                  onClick={() => deleteTodo(item.id)}
                >
                  X
                </button>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => checkboxChange(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
