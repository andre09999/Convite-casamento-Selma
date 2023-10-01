import React, {useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home';


function App() {
  const[nome, setNome] = useState('')
  
  const pegarNome = (v) => {
    console.log(v);
    setNome(v)
  }
  const [Count, setCount] = useState(false);
  useEffect(() => {
    if(nome.length >= 3) setCount(true)
    if(nome.length < 3) setCount(false)
  },[nome]);
  return ( 
      <div>
        <Routes>
        <Route element={ <Login value={ pegarNome } count={Count}/> } path='/' exact/>
        <Route element={ <Home value={ nome } /> } path='/home' />
        </Routes>
        </div>
  );
}

export default App;
