export const LoadTodos = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load",
          payload: json,
        });
      });
  };
};
