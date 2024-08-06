import React, { useState } from "react";
import Button from '@mui/joy/Button';
import "./Style/To-do-list.css";

function Todolist() {
  const [old, setOld] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setOld(e.target.value);
  };

  const handleChange = () => {
    if (old.trim()) {
      setItems([...items, old]);
      setOld("");
    }
  };

  const handleDelete = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="main">
          <h1>TO_DO_LIST</h1>
      <input value={old} onChange={handleInputChange} />
      <Button onClick={handleChange}>Add</Button>
      <div className="adddiv">
        {items.map((item, index) => (
          <div key={index}>
            {item}
            <Button onClick={() => handleDelete(index)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todolist;
