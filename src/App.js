import React, {useState, useEffect} from "react";
import Form from "./components/Form"
import ToDoList from "./components/TodoList"

function App() {



  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    filterHandler();
  }, [todos, status])


  const filterHandler= () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className = "app">
      <header>
        <h1>My ToDoList {inputText}</h1>
      </header>
      <Form todos= {todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <ToDoList todos= {todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>

  );

}

export default App;