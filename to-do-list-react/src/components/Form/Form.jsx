import React from "react";

function Form({ todoText, setTodoText, todos, setTodos }) {
  // The "onChangeTodoText" function is called whenever the input field changes its value.
  // It updates the "todoText" state with the new input value.
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  // The "onSubmit" function is called when the form is submitted.
  // It prevents the default form submission behavior and adds a new todo to the "todos" state.
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    // If the "todoText" is empty, return early and do not add an empty todo.
    if (todoText === "") return;

    // Add a new todo to the "todos" state using the "setTodos" function.
    // The new todo is an object containing the "todoText", "completed" status, and a random "id".
    setTodos([
      ...todos,
      {
        todoText: todoText,
        completed: false,
        id: Math.floor(Math.random() * 1000000),
      },
    ]);

    // Clear the input field by resetting "todoText" to an empty string.
    setTodoText("");
  };

  // The component represents the header section containing the input field for adding new todos.
  return (
    <header className="header">
      <h1>TO DO LIST</h1>
      {/* The form element triggers the "onSubmit" function when the form is submitted. */}
      <form onSubmit={onSubmit}>
        {/* The input field allows users to enter new todo text. */}
        {/* The value of the input is controlled by the "todoText" state. */}
        {/* When the input changes, the "onChangeTodoText" function is called. */}
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={todoText}
          onChange={onChangeTodoText}
        />
      </form>
    </header>
  );
}

export default Form;
