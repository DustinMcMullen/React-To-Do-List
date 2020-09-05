import React, { useState } from "react";

function App() {
  const [newListItem, setNewListItem] = useState();

  const [allToDoItems, setAllToDoItems] = useState([
    "start2",
    "continue2",
    "finish2"
  ]);

  const toDoItems = ["start", "continue", "finish"];

  function handleListItem(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewListItem(value);
    console.log(newListItem);
  }

  function addItem() {
    setAllToDoItems((prevValue) => {
      return [...prevValue, newListItem];
    });
    setNewListItem("");
    console.log(allToDoItems);
  }

  function createList(toDoListItem) {
    return <li>{toDoListItem}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="newToDoItemContent"
          type="text"
          onChange={handleListItem}
          value={newListItem}
        />
        <button type="submit" name="addNewToDoItem" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{allToDoItems.map(createList)}</ul>
      </div>
    </div>
  );
}

export default App;
