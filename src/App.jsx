import React, { useState } from "react";
import { DBfetchItems, DBpushItem } from "./components/DBManager.jsx";
import ExpenseForm from "./components/Form";
import ExpenseList from "./components/ItemList";
import ExpenseTitle from "./components/ExpenseTitle";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAdd = (item) => {
    setItems([...items, item]);
    DBpushItem(item);
  };

  React.useEffect(() => {
    const getItems = async () => {
      const fetched = await DBfetchItems();
      setItems(fetched);
    };
    getItems();
  }, []);

  return (
    <>
      <ExpenseTitle />
      <div className="w-full flex justify-center max-w-10xl">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ExpenseForm onAdd={handleAdd} />
          <ExpenseList items={items} />
        </div>
      </div>
    </>
  );
};

export default App;
