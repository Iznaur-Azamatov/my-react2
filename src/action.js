export const LoadTodos = () => {
  return (dispatch) => {
    dispatch({ type: "todos/start" });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "todos/items",
          payload: json,
        });
      });
  };
};
