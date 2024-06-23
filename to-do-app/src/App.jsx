import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date:${itemDueDate} `) //for addbutton to add item
    const newTodoItems = [{ name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoItems)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <div className="items-container">
        <TodoItem1 todoItems={todoItems}></TodoItem1>
      </div>
    </center>
  );
}

export default App;