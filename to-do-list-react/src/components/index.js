import { useEffect, useState } from "react";
import Form from "./Form/Form";
import ToDoList from "./ToDoList/ToDoList";
import Footer from "./Footer/Footer";


function Todos() {
  // Use the useState hook to define component-level state variables.
  // "todoText" - Stores the text value for adding new todos.
  // "todos" - An array that holds all the todos.
  // "status" - Stores the filtering status for showing todos (all, completed, active).
  // "filteredTodos" - An array that holds todos filtered based on the "status".
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect hook runs only once when the component is first rendered, and when the second argument is an empty array ([]) signifying no dependency change.
  // In this useEffect, it is associated with local storage for data persistence.
  useEffect(() => {
    getLocalTodos(); // Call the "getLocalTodos" function to fetch all todos from localStorage.
  }, []);

  // useEffect hook runs when either "todos" or "status" state changes.
  // This useEffect filters todos based on changes and saves todos to local storage.
  useEffect(() => {
    filterTodo(); // Call the "filterTodo" function to filter todos based on "status".
    saveLocalTodos(); // Call the "saveLocalTodos" function to save "todos" to localStorage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  // Function to filter todos based on the "status".
  const filterTodo = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true)); // Filters completed todos.
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false)); // Filters active todos.
        break;
      default:
        setFilteredTodos(todos); // If "status" is "all", show all todos.
        break;
    }
  };

  // Function to save "todos" to localStorage.
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Save "todos" state to localStorage in JSON format.
  };

  // Function to fetch all todos from localStorage.
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      // If "todos" key does not exist in localStorage, create an empty todo array and save it.
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      // If "todos" key exists in localStorage, parse the todos from JSON format and set them to the "todos" state.
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    // The "Todos" component consists of three main parts: Form, ToDoList, and Footer.
    <section className="todoapp">
      {/* "Form" component contains a form to add new todos. */}
      <Form
        todoText={todoText}
        setTodoText={setTodoText}
        todos={todos}
        setTodos={setTodos}
      />

      {/* "ToDoList" component lists all the todos and handles actions. */}
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />

      {/* "Footer" component displays filter options and the overall status of todos. */}
      <Footer
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
    </section>
  );
}

export default Todos;