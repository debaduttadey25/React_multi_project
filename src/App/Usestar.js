import React from 'react';
import { useState } from "react";

function Usestar() {
    const [color, setColor] = useState(1);
    let a=1;
    return (
        <div>
            
            <h1>UseStar</h1>    
            <h1>{color}</h1>
          <h1>{a}</h1>

<button onClick={()=>{
     setColor(color - 1);
}}>decrement</button>


<button onClick={() => {
                setColor(color + 1);
            }}>Increment</button>
        </div>
    )
  
}

export default Usestar;
