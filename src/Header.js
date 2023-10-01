import React from 'react'
import BelaFera from './images/rosa.png'
import './App.css'
function header() {

  return (
    <header>
            <img alt='FOto bela e a fera' src={BelaFera}/>
            <p className='versiculo'>Para que todos vejam, e saibam, e considerem, e juntamente entendam que a mão do Senhor fez isto, e o Santo de Israel o criou.
Isaías 41:20</p>
            <img alt='FOto bela e a fera' src={BelaFera}/>
    </header>
  );
}

export default header;
