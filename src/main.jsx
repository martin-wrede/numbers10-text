import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Input from './Input';
import Input2 from './Input2';
import './index.css';

 const scale = 0.9; // object in foreground scaling
 const position = [0, -0.8, 0] // object in foreground : x, y, z
let inputVar = false; 

// If you want to parse the URL of current page in browser:
// running on https://www.example.com?name=n1&name=n2
let params = new URLSearchParams(location.search);

let age = parseInt(params.get('age'), 10);
let title = params.get('title');
let name = params.get('name');
let text = params.get('text');

age && name && title || text ? (inputVar = true) : (inputVar = false);

function Main() {

  const [liveAge, setLiveAge] = useState(1); // 

  const childToParentAge = (childdata) => {
    setLiveAge(childdata);
  //  console.log(liveAge)
  };

  return (
    <React.StrictMode>
      <>
         {/* {inputVar && <Input2 age={age} title={title} name={name} text={text} />} */}
        {!inputVar && <Input childToParentAge={childToParentAge} />}

        <App age={ inputVar ? age : liveAge } scale={scale} position={position} modelPath={'archer-comp2.glb'} />
      </>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
