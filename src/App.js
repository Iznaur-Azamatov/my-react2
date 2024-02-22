import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadTodos } from "./action";

function App() {
  const todo = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (todo) {
      setTodos(todo);
    }
  }, [todo]);

  useEffect(() => {
    dispatch(LoadTodos());
  }, [dispatch]);

  const checkboxChange = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="todo">
        <div className="todo-subtitle">
          <h1>Todo List</h1>
        </div>
        {loading ? (
          <div className="load">
            <h2>loading...</h2>
          </div>
        ) : (
          <div className="todo-style">
            {todos.map((item) => (
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
        )}
      </div>
    </div>
  );
}

export default App;
