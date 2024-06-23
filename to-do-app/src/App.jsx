import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [todoItems, setTodoItems] = useState([{ name: "milk", dueDate: "4/10/2023" }, { name: "milk", dueDate: "4/10/2023" }]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date:${itemDueDate} `) //for addbutton to add item
    const newTodoItem = { name: itemName, dueDate: itemDueDate }
    setTodoItems(prevTodos => [...prevTodos, newTodoItem])
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <div className="items-container">
        <TodoItem1 todoItems={todoItems}></TodoItem1>
      </div>
      <Counter />
    </center>
  );
}

export default App;