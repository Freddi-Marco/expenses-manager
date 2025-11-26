import React, { useState } from "react";
import PocketbaseForm from "./components/PocketbaseForm";
import PocketbaseList from "./components/PocketbaseList";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAdd = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <PocketbaseForm onAdd={handleAdd} />
      <PocketbaseList items={items} />
    </div>
  );
};

export default App;
