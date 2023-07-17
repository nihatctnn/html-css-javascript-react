import React from "react";

function Footer({ todos, setTodos, status, setStatus }) {
  // The "handleSetStatusAll" function is called when the "All" filter is clicked.
  // It updates the "status" state to "all" to show all todos.
  const handleSetStatusAll = () => {
    setStatus("all");
  };

  // The "handleSetActive" function is called when the "Active" filter is clicked.
  // It updates the "status" state to "active" to show only active (uncompleted) todos.
  const handleSetActive = () => {
    setStatus("active");
  };

  // The "handleSetCompleted" function is called when the "Completed" filter is clicked.
  // It updates the "status" state to "completed" to show only completed todos.
  const handleSetCompleted = () => {
    setStatus("completed");
  };

  // The "handleStatus" function checks if a specific filter type is selected or not.
  // If the filter is selected, it adds the "selected" class to highlight the selected filter.
  const handleStatus = (statusText) => {
    return `${status === statusText ? "selected" : ""}`;
  };

  // The "destroyAll" function clears all the todos by updating the "todos" state with an empty array.
  const destroyAll = () => {
    setTodos([]);
  };

  // The "activesLength" variable is used to count the number of active (uncompleted) todos.
  let activesLength = 0;

  todos.map((todo) => {
    // Loop through all todos and count the number of active todos by checking their "completed" status.
    if (todo.completed === false) {
      activesLength++;
    }
    return activesLength;
  });

  // The "hiddenBtn" function is used to determine if the "Clear completed" button should be visible or hidden.
  // If all todos are completed, it adds the "hidden" class to hide the button.
  const hiddenBtn = () => {
    const checkAllCompleted = todos.every((todo) => !todo.completed);
    return checkAllCompleted ? "hidden" : "";
  };

  // If the "todos" array is empty, return null to render nothing.
  if (todos.length === 0) return null;

  // The component represents the footer section containing filtering options and bulk actions.
  return (
    <footer className="footer">
      {/* The "activesLength" variable displays the number of active todos. */}
      <span className="todo-count">
        <strong>{activesLength}</strong> items left
      </span>

      {/* List containing filtering options. */}
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={handleSetStatusAll}
            className={handleStatus("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleSetActive}
            className={handleStatus("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleSetCompleted}
            className={handleStatus("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      {/* The "Clear completed" button is used to delete completed todos. */}
      <button className={`clear-completed ${hiddenBtn()}`} onClick={destroyAll}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
