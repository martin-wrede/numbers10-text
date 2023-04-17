import React from "react";
import "./index.css";
 
export default function Input2({age,name,title,text}) {
        
      return(     
      <>
      <div className="meindiv">
          <div className="meindiv2"><h1>{age}</h1></div>
          <div className="meindiv3"><h2>{title}</h2></div>
          <div className="meindiv4"><h3>{name}</h3> </div>
          <div className="meindiv5"><h4>{text}</h4></div>

      <div className="meindiv">
        
      <div id="button2">  
         
      </div>
      </div>
      
      </div>
      </>
    )
}
