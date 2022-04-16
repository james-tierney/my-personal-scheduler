import '.././App.css';
import { Button } from './Button';

import React, { useEffect, useState } from 'react';


const TimePicker = (props) => {
  // could just create current time varibale and set default value to that?
    const [time, setTime] = useState(new Date("HH:mm"));
    

    useEffect(() => {
       let timer = setInterval(() => setImmediate(new Date("HH:mm")), 1000)

       return function cleanUp() {
         clearInterval(timer);
       }
    })
    
  return (
      
    <div className={props.className}>
    
      <p><b>{props.label}</b></p>
      <input 
          type="time"
          
          defaultValue={time.toLocaleTimeString()}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300,
          }}
      />
    
  </div>
    
  );
}

export {TimePicker};
