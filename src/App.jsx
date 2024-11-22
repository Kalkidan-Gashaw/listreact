
import React, { useState } from 'react';
import AddItemForm from './Additemform.jsx';
import ItemList from './ItemList.jsx';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className='container'>
      <h1>Item List</h1>
      <AddItemForm onAdd={addItem} />
      <ItemList items={items} onDelete={removeItem} />
    </div>
  );
}

export default App;