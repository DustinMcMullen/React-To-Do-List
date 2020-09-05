import React, { useState } from "react";

function App() {
  const [newListItem, setNewListItem] = useState();
  const [allToDoItems, setAllToDoItems] = useState([]);

  function handleListItem(event) {
    const value = event.target.value;
    setNewListItem(value);
  }

  function addItem() {
    setAllToDoItems((prevValue) => {
      return [...prevValue, newListItem];
    });
    setNewListItem("");
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
