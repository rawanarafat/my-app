import React, {useState} from 'react';
import "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/web.css";
import Card from "./Card";
import Data from "./Data";
import Ripples from 'react-ripples'


const Experiance = () => {
  const [ Active, setAtive] = useState("firstcard");
  
  
  return (
    <div className="ps">
      
      <li>
        
        {/*<button className="btn" onClick={() => setActive("secondcard")}>second card</button> */}
        <Ripples color={'#c9c1f5'} during={1200} className="rip">
          <button className="btn" >Wall Street Professionals</button>
        </Ripples>
        
      </li>
        
      
      <div>
        { Active === "firstcard" && <Card data={Data} cardIndex={0} />}
        {/*{ Active === "secondcard" && <Card data={Data} cardIndex={1} />}*/}
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default Experiance