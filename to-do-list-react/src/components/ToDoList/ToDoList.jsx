import React from "react";
import { useState } from "react";

function ToDoList({ todos, setTodos, filteredTodos }) {
  // Define the state variable "allCompleted" using the useState hook.
  // "allCompleted" represents whether all todos are marked as completed.
  const [allCompleted, setAllCompleted] = useState(false);

  // The "handleToggleAll" function is triggered when the "Mark all as completed" / "Mark all as active" label is clicked.
  // This function toggles the completed status of all todos and updates the "allCompleted" state accordingly.
  const handleToggleAll = () => {
    const newTodos = todos.map((todo) => {
      return { ...todo, completed: !allCompleted };
    });
    setTodos(newTodos);
    setAllCompleted(!allCompleted);
  };

  // If the todo list is empty, return null to render nothing.
  if (todos.length === 0) return null;

  // Section where all todos are listed and managed.
  return (
    <section className="main">
      {/* The "toggle-all" checkbox indicates whether all todos are completed or not. */}
      <input
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={handleToggleAll}
      />
      {/* When the label is clicked, it calls the "handleToggleAll" function to toggle the status of all todos. */}
      <label htmlFor="toggle-all" onClick={handleToggleAll}>
        {/* The text of the label changes based on the "allCompleted" state. */}
        Mark all as {allCompleted ? "active" : "completed"}
      </label>

      <ul className="todo-list">
        {/* Create a list item (li) for each todo in the "filteredTodos" array. */}
        {filteredTodos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`${todo.completed ? "completed" : ""}`}
            >
              <div className="view">
                {/* Checkbox is used to complete/uncomplete the todos. */}
                <input
                  checked={todo.completed}
                  className="toggle"
                  type="checkbox"
                  onChange={() => {
                    setTodos(
                      todos.map((target) => {
                        // If the clicked todo matches with "target", toggle its completed status.
                        if (target.id === todo.id) {
                          return { ...target, completed: !target.completed };
                        }
                        return target;
                      })
                    );
                  }}
                />
                <label>{todo.todoText}</label>
                {/* The "destroy" button is used to delete any todo. */}
                <button
                  className="destroy"
                  onClick={() =>
                    // To delete, update the "setTodos" function with all todos except the clicked one.
                    setTodos(todos.filter((target) => target.id !== todo.id))
                  }
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ToDoList;