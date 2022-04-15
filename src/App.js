import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Item } from './components/Item';
import { Button } from './components/Button';
import { TimePicker } from './components/TimePicker';
const App = () => {
  const [components, setComponents] = useState([<br><Item/><Button className="CompleteButton" text="Complete"/></br>])
  const [item, setItem] = useState("");


  function addComponent() {
    setComponents([...components, <br><Item/></br>])
  }

return (
  <div>
  <div id="ButtonContainer">
    <Button className="AddItem" onClick={addComponent} text="+" />
    </div>
  <div id="MainContainer" >
    
    {components.map((item, i) => (<Item/> ))}
    
    
    
    </div>
    <div id="CompleteDiv">
    <Button className="CompleteButton" text="✓" />
    <TimePicker/>
    </div>
    </div>
);
}

export default App;
