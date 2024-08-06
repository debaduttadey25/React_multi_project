
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Play from './Play';
import Button from './Button';
import Usestar from './Usestar';
import App1 from './app1';
import Tic from './tic-tac-toy';
import Todolist from './To-do-list';
import Cou from './Counter';


function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Play />} />
          <Route path="/button" element={<Button />} />
          <Route path='/usestate' element={<Usestar/>}/>
          <Route path='/app' element={<App1/>} />
          <Route path='/tic' element={<Tic/>}/>
          <Route path='/to-do-list' element={<Todolist/>}/>
          <Route path='counter' element={<Cou/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
