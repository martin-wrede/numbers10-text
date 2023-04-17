import React, {useState}  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
 import Input from './Input'
 import Input2 from './Input2'
import './index.css'


const scale = 0.27; // Gift object in foreground scaling
let inputVar = false

// If you want to parse the URL of current page in browser:
// running on https://www.example.com?name=n1&name=n2
let params = new URLSearchParams(location.search);

let age= parseInt(params.get("age"), 10);
let title = params.get("title"); 
let name = params.get("name"); 
let text = params.get("text"); 

// console.clear
// console.log(age,name,title,text)

age && name && title ||text ? inputVar = true : inputVar = false

/*
function main(){
// for the live preview pass the current age to App
const [data, setData] = useState(0);
const childToParent = (childdata) => {
  setData(childdata);
}
console.log(data)
}

*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
   {inputVar && <Input2 age={age} title={title}    name={name} text={text}  />}
   {!inputVar && <Input  childToParent={childToParent} />} 
  
    <App age={age} scale={scale} modelPath={"/gift5.glb"} />  
    </>
  </React.StrictMode>
)
