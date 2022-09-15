import React from "react";
import { useState } from "react";



const Error = () => {
  const isBackgroundRed = true;
    const state = useState();
 
    const [count, setCount] = useState(0);
   
   
    const IncNum = () => {
      setCount(count + 1)
      console.log("Clicked");
    }
    const DecNum = () => {
      setCount(count - 1)
      console.log("Clicked");
    }
 
    return (
        <div  className="p1" style={{
          padding:"5%",
          backgroundColor: isBackgroundRed ? 'Seagreen' : 'blue',
      }}>
    <div >    
      <h1  style={{
            padding: "10%", display: "flex",
            justifyContent: "center"
        }}>Ooopss Error Found!! <br /><br /> " Your Punishment is Do Increament and Decrement numbers"</h1></div>

          <h1>{count}</h1>
         <button onClick={IncNum}>Increament</button>
         <button onClick={DecNum}>Decrement</button>

         <h1 style={{
             display: "flex",
            justifyContent: "center"
        }}>Sameer Mehmood</h1>
       </div> 
)
}

export default Error;