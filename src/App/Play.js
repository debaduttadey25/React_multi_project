import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Play() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    navigate('/button', { state: { "inputValue":{"value":inputValue} } });
  };

  return (
    <div className="App">
      <input 
        name="myInput" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
      
      <button onClick={handleButtonClick}>Demo</button>
    </div>
  );
}

export default Play;
