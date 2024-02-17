import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadTodos } from "./action";

function App() {
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadTodos());
  }, [dispatch]);

  return (
    <div className="app">
      <div>
        <h2>Туду :</h2>
      </div>
      {loading
        ? "Loading..."
        : todos.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

export default App;
