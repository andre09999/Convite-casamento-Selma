import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

function Login({ value, count }) {
  const handleChange = (e) => {
    value(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  };

  return (
    <div className="box">
      <label>
        <h1 className="h1">Digite seu nome:</h1>
        <input type="text" onChange={handleChange} />
        {count && <Link className="button" to='/home' >Entrar</Link>}
      </label>
    </div>
  );
}

export default Login;
