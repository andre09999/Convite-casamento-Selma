import React from 'react'
import Header from './Header';
import './App.css'
import wpp from './images/whatsapp.png'
import mps from './images/Vectorizeimages-Iconpack-Map.512.png'
import { Link } from 'react-router-dom';
function home({value}) {

  return (
    <div className="fundo-convite">
   
    <div className='fundoConvite'>
    <Header/>
      <h1 className='Nome text'> Andre e Erica</h1>
      <h2 className='Nome msg'>Convidam você <h2 className='nomeCon'>{value}</h2> e sua familia  para cerimônia de seu casamento.</h2>
      <div className='date'>
      <h1 className='Nome mes'>MAIO </h1>
      <h2 className='Nome data'>--- <span className='numeral'>--</span> ás ---hrs</h2>
      <h2 className='Nome mes'>2023</h2>
      </div>
      <div className='links'>
      <Link className='lin' to="https://api.whatsapp.com/send?phone=5562993926390&text=Estou%20confirmando%20minha%20presen%C3%A7a%20no%20casamento!" target='_blank'>
      <img alt='whatsapp' src={wpp}/>
      <h3> Confirmar presença</h3>
     </Link>
      <Link className='lin' to="https://goo.gl/maps/9YehWr2bisNsGgrW6" target='_blank'>
      <img alt='whatsapp' src={mps}/>
      <h3>Endereço</h3></Link>
      </div>
    
    </div>
    </div>
  );
}

export default home;
