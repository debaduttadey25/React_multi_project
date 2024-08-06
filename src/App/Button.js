import React from 'react';
import { useLocation } from 'react-router-dom';

function ButtonPage() {
  const location = useLocation();
   let { inputValue } = location.state===null?{ "inputValue":{"value":"red"} }:location.state ;

console.log(inputValue);
  return (
    <div>
      <h1>Button Page</h1>

<p style={{ color: inputValue.value }}>Input Value: {inputValue.value}</p>

      

    </div> 
  );
}

export default ButtonPage;
