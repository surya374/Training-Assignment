import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, input]);
    setInput("");
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <div className="container-2">
        <h1 className="heading">TODO-LIST</h1>

        <form className="form">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="ADD TODO..."
          />

          <button onClick={handleSubmit} className="Add-Button">
            ADD
          </button>
        </form>

        <ul className="List-items">
          {items.map((item) => (
            <li key={item}>
              <input type="checkbox" />
              {item}
            </li>
          ))}
        </ul>
        <button
          className="Delete-Button"
          onClick={(item) => handleDelete(item.id)}
        >
          CLEAR LIST
        </button>
      </div>
    </div>
  );
}
