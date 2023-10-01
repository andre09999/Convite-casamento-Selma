import { Link } from "react-router-dom";
import React from 'react';
import "./App.css"


function login({value,count}) {
  
    return (
      <div className="box">
       <label>
        <h1 className="h1">Digite seu nome:</h1>
       <input type="text" onChange={({target})=>{value(target.value)}} />
      {
        count ?
         <Link className="button" to='/home' >Entrar</Link> :
         <></>
      }
     
       </label>
      </div>
    );
  }
  
  export default login;
  