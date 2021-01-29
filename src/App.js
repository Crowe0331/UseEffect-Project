//have to import useState and useEffect from react 
import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  //count is JSX object and setCount is the actual function that will alter the value
  //useState value = 0 at the start
  const [count, setCount] = useState(0);

//Utilize the useEffect to change the title by accessing the DOM
//Through a conditional statement, the title is updated with low or high count based on the value of count
//The useEffect is taking in the count variable and every time the count variable changes, useEffect re-renders again. 
useEffect(() => {
  document.title= 'Count:' + count;
  if(count < 5) document.title = "Low Count"
  if(count >= 5) {
    document.title = "High Count"
    document.body.style.backgroundColor = 'coral';
  }
  console.log(useEffect);
});

//
  return (
    <div className="App">
      <div className="count">Count: {count}</div>
      <div>
         <button className="button1" onClick={() => setCount(count + 1)}>+</button>
         <button className="button2" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};


export default App;


