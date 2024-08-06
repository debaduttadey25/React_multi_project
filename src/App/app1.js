import React, { useState } from 'react';
import './Style/App1.css';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
//bcwebkkbbkbwkef jbewfkkbk
function App1() {
  const [postContent, setPostContent] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {

    if (
      (value === '*' || value === '-' || value === '+' || value === '/') &&
      (postContent.endsWith('*') || postContent.endsWith('-') || postContent.endsWith('+') || postContent.endsWith('/'))
    ) {
      setPostContent(postContent.slice(0, -1) + value);
    } else if (value === '=') {
      try {
        const evaluatedResult = eval(postContent);
        setResult(evaluatedResult);
        setPostContent(String(evaluatedResult));
      } catch (error) {
        setPostContent("0");
      }
    } else {
      setPostContent(postContent + value);
    }
  };

  const clearContent = () => {
    setPostContent('');
    setResult(null);
  };

  const deleteContent = () => {
    setPostContent(postContent.slice(0, -1));
  };

  return (
    <div className="main">
      <h1>Calculator</h1>
      <div className="textarea">
        <Textarea minRows={10} variant="solid" value={postContent} readOnly />
      </div>
      <div className="button-container">
      <div>
          <Button size="lg" onClick={clearContent}>CE</Button>
          <Button size="lg" onClick={deleteContent}>Delete</Button>
        </div>
        <div>
          <Button size="lg" onClick={() => handleButtonClick('1')}>1</Button>
          <Button size="lg" onClick={() => handleButtonClick('2')}>2</Button>
          <Button size="lg" onClick={() => handleButtonClick('3')}>3</Button>
          <Button size="lg" onClick={() => handleButtonClick('*')}>*</Button>
        </div>
        <div>
          <Button size="lg" onClick={() => handleButtonClick('4')}>4</Button>
          <Button size="lg" onClick={() => handleButtonClick('5')}>5</Button>
          <Button size="lg" onClick={() => handleButtonClick('6')}>6</Button>
          <Button size="lg" onClick={() => handleButtonClick('-')}>-</Button>
        </div>
        <div>
          <Button size="lg" onClick={() => handleButtonClick('7')}>7</Button>
          <Button size="lg" onClick={() => handleButtonClick('8')}>8</Button>
          <Button size="lg" onClick={() => handleButtonClick('9')}>9</Button>
          <Button size="lg" onClick={() => handleButtonClick('+')}>+</Button>
        </div>
        <div>
          <Button size="lg" onClick={() => handleButtonClick('0')}>0</Button>
          <Button size="lg" onClick={() => handleButtonClick('00')}>00</Button>
          <Button size="lg" onClick={() => handleButtonClick('/')}>/</Button>
          <Button size="lg" onClick={() => handleButtonClick('=')}>=</Button>
        </div>
     
      </div>
    </div>
  );
}

export default App1;
