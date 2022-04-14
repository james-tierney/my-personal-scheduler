import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react';

const Item = () => {
    const [item, setItem] = useState("");
    console.log("hello world");
  return (
      
    <div className="Item">
    
      <input 
          type="text"
          value={item}
          label="Enter item scheduled"
          onChange={(evt) => {
              setItem(evt.target.value);
          }}
      />
      
    <h3>Your item scheduled is: {item}</h3>
    
  </div>
    
  );
}

export {Item};
