import React, { useState } from "react";
import { DBfetchItems, DBpushItem, DBDeleteItem } from "./components/DBManager.jsx";
import TotalExpenses from "./components/TotalExpenses";
import ExpenseForm from "./components/Form";
import ExpenseList from "./components/ItemList";
import ExpenseTitle from "./components/ExpenseTitle";
import Graph from "./components/Graph.jsx";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAdd = (item) => {
    setItems([...items, item]);
    DBpushItem(item);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
    DBDeleteItem(id);
    console.log(id + " deleted");
  };

  React.useEffect(() => {
    const getItems = async () => {
      const fetched = await DBfetchItems();
      setItems(fetched);
    };
    getItems();
  }, [items]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <ExpenseTitle />
        <TotalExpenses items={items} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" style={{ minHeight: '500px' }}>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between h-[500px]">
            <ExpenseForm onAdd={handleAdd} />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between h-[500px]">
            <div className="flex-1 overflow-y-auto">
              <ExpenseList items={items} onDelete={handleDelete} />
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <Graph items={items} />
        </div>
      </div>
    </div>
  );
};

export default App;
