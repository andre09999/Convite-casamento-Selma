import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';
import wpp from './images/whatsapp.png';
import mps from './images/Vectorizeimages-Iconpack-Map.512.png';
import pix from './images/download.png'
import { Link, useNavigate } from 'react-router-dom';

function Home({ value }) {
  const history = useNavigate();
  useEffect(() => {
    const retorna = () => {
      if (!value) {
        history('/');
      }}
      retorna()
  },[history, value]);
  return (
    <div className="fundo-convite">
      <div className='fundoConvite'>
        <Header />
        <div className='cantoE'/>
        <div className='cantoD'/>
        <div className='cantoIE'/>
        <div className='cantoID'/>
        <h1 className='Nome text'> Dazio e Selma</h1>
        <h2 className='Nome msg'>
          Convidam você <h2 className='nomeCon'>{value}</h2> e sua família  para a cerimônia de seu casamento civil.
        </h2>
        <div className='date'>
          <h1 className='Nome mes'>Novembro </h1>
          <h2 className='Nome data'>Sexta<span className='numeral'>03</span> às 14:30hrs</h2>
          <h2 className='Nome mes'>2023</h2>
        </div>
        <div>
        <Link className='pix' target='_blank' to='https://nubank.com.br/pagar/1f2zym/1iSxBQWF4N'> 
          <img alt='pix' src={pix} className='picImage'/>
          <p className='pixx'>Com a casa montada e corações unidos, convidamos você a celebrar conosco. Seu presente, em forma de PIX, nos ajudará a embarcar em uma viagem especial juntos. Aguardamos com alegria a sua presença e bons momentos compartilhados no nosso dia especial.</p>
          <p className='pixx'>Clique aqui para fazer seu pix</p>
          </Link>
        </div>
        <div className='links'>
          <Link className='lin' to="https://api.whatsapp.com/send?phone=5562983289279&text=Confirmo%20minha%20presen%C3%A7a%20no%20dia%2003/11" target='_blank'>
            <img alt='whatsapp' src={wpp}/>
            <h3> Confirmar presença</h3>
          </Link>
  
          <Link className='lin' to="https://maps.app.goo.gl/nq7jXYaT1Wqwnb918" target='_blank'>
            <img alt='whatsapp' src={mps}/>
            <h3>Endereço</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
