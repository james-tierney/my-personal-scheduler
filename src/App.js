import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Item } from './Item';
import { Button } from './Button';

const App = () => {
  const [components, setComponents] = useState([<br><Item/></br>])
  const [item, setItem] = useState("");


  function addComponent() {
    setComponents([...components, <br><Item/></br>])
  }

return (
  <div>
  <div id="ButtonContainer">
    <Button onClick={addComponent} text="Add Item" />
    </div>
  <div id="MainContainer" >
    
    {components.map((item, i) => (<Item/>))}
    
    <Item/>
    <Button text="Complete" />
    </div>
    </div>
);
}

export default App;
