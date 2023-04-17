import React, { useState } from "react";
import { AmbientLightProbe } from "three";
import "./index.css";
 

export default function Input({childToParentAge}) {

      const  [ age, setAge ] = useState(1)
      const  [ name, setName ] = useState("Dear Iris")
      const  [ title, setTitle ] = useState("Happy Birthday")
      const  [ text, setText ] = useState( "Greetings from Anne")
      const [showForms, setShowForms] = useState(true)
      const [showDiv, setShowDiv] = useState({opacity:'1.0'})     
      // useState({backgroundColor:'green'})   

     const toggleFunction = (par) => {
    
     // console.log(par)
     // return( setShowDiv({opacity:'0.3'}))
     return(setShowDiv({opacity:par}))
     }

      const toggleForms= (event)=> {
       // setShowForms(true) ? console.log("hallo") : console.log("nein")
        setShowForms(!showForms)
      }

      const changeAge =(event)=>{
       
      const setAgeNew = event.target.value

      //  console.log(setAgeNew.length)
      // if (typeof setAgeNew === "number"){}
      if (setAgeNew.length < 3){
        setAge(setAgeNew)
        childToParentAge(setAgeNew) // send age number immediately to main.jsx
      }


      }
      const changeTitle = (event)=>{
        const setTitleNew = event.target.value
        setTitle(setTitleNew)
      // console.log(setAge) 
      }

      const changeName = (event)=>{
        const setNameNew = event.target.value
        setName(setNameNew)
      // console.log(setAge)
      }

      const changeText = (event)=>{
        const setTextNew = event.target.value
        setText(setTextNew)
      // console.log(setAge)
      }
        
      
    const handleSubmit = (event) => {
    event.preventDefault();
     
     const testUrl = `https://martin-wrede.github.io/numbers9-text/index.html?age=${age}&name=${name}&title=${title}&text=${text}`;
  //  const testUrl = `http://localhost:3000/numbers8-text/index.html?age=${age}&name=${name}&title=${title}&text=${text}`;
    window.location.href= testUrl;
    console.log(testUrl)
    
    }
   
    
        
      return(     
      <>
      <div className="meindiv">
  {/*
          <div className="meindiv2"><h1>{age}</h1></div>
          <div className="meindiv3"><h2>{title}</h2></div>
          <div className="meindiv4"><h3>{name}</h3> </div>
          <div className="meindiv5"><h4>{text}</h4></div>

      */}
          <div className="meindiv2" id="id2"  style={showDiv}  >  
                <input type="number" 
                defaultValue={age} 
                name="age"
                className="input"
                onChange={changeAge} />  
            </div>
         {/*
      <div className="meindiv" >
          <form onSubmit={handleSubmit}>
            <div className="meindiv2" id="id2"  style={showDiv}  >  
                <input type="number" 
                defaultValue={age} 
                name="age"
                className="input"
                onChange={changeAge} />  
            </div>
            
            <div className="meindiv3" id="id3"  style={showDiv}  >  
                <input type="text" defaultValue="Happy Birthday" className="input" onChange={changeTitle} /> 
            </div>
            <div className="meindiv4" id="id4"  style={showDiv}  >  
                <input type="text" defaultValue="Dear Iris" className="input" onChange={changeName} />  
            </div>
            <div className="meindiv5" id="id5"   style={showDiv}  >        
                <input type="text" defaultValue="Greetings from Anne" className="input"  onChange={changeText} /> 
            </div>
            
            <div id="button-submit"  style={showDiv}>  
          <button className="button" type="submit">
          Submit
        </button>
        
        </div>
        
      </form>

      <div id="button-toggle">  
              <button  
              className="button"
                onClick={()=>{
                  showForms ?
                  toggleFunction(0.0) : toggleFunction(1.0) // opacity either transparent or 100% 
                  setShowForms(!showForms)   // toggle true or false
              }}
              >
              Show/Hide Forms
              </button>
      </div>
      </div>
       */}

      </div>
      </>
    )
}
