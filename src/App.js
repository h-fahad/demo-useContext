import React, { useState } from 'react';
// import  Message  from './Component/result'
import Parent from "./parent"
import Countercontext from './valueContext';


export default function App() {
  //  let [count, setCount] = useState(20);
  let count=useState(1);

  // let [count, setCount] = useState(1);
  // let [isMorning, setMorning] = useState(false)

  return (
    // <div className={`box ${isMorning ? 'day' : ''}`}>

    //   <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

    //   <Message counter={count} />
    //   <br />

    //   <button onClick={() => setCount(count + 1)}>
    //     Update Counter
    //   </button>

    //   <button onClick={() => setMorning(!isMorning)}> 
    //     Update Day
    //   </button>

    // </div>
    <Countercontext.Provider value={count}>
    <div>
    <Parent name="Fraz"/>
</div>
    </Countercontext.Provider>


  )
}