import { useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const [activeItems, setActiveItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  function displayCompletedTasks() {
    const completedItems = items.filter((item) => item.packed);
    setCompletedItems(completedItems);
  }

  function displayActiveTasks() {
    const activeItems = items.filter((item) => !item.packed);
    setActiveItems(activeItems);
  }

  function displayAllItems() {
    setActiveItems([]);
    setCompletedItems([]);
  }

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItems(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleClearCompletedItems() {
    setItems((prevItems) => prevItems.filter((item) => !item.packed));
  }

  function handleClearAllItems() {
    setItems([]);
    setActiveItems([]);
    setCompletedItems([]);
  }

  return (
    <div className="App">
      <Header />

      <InputField onAddItems={handleAddItems} />

      <TodoList
        items={
          completedItems.length > 0
            ? completedItems
            : activeItems.length > 0
            ? activeItems
            : items
        }
        onDelete={handleDeleteItems}
        onToggleItem={handleToggleItem}
      />

      <Footer
        items={items}
        deleteCompletedItems={handleClearCompletedItems}
        completedItems={displayCompletedTasks}
        activetasks={displayActiveTasks}
        allitems={displayAllItems}
        clearAll={handleClearAllItems}
      />
    </div>
  );
}
