import './App.css';
import Banner from './componets/banner/banner.jsx';
import Header from './componets/header/header.jsx';
import Formulario from './componets/formulario/formulario.jsx';
import Time from './componets/time/time';
import { useState } from 'react';
import Rodape from './componets/rodape/rodape';



function App() {

const times = [
  {
    nome:'Humanos',
    corPrimaria:'#00BFFF',
    corSecundaria:'#40E0D0'
  },
  {
    nome:'Monstros',
    corPrimaria:'#00FF7F',
    corSecundaria:'#D2B48C'
  },
  {
    nome:'Animais',
    corPrimaria:'#FF6347',
    corSecundaria:'#FFA500'
  },
  {
    nome:'Robos',
    corPrimaria:'#9370DB',
    corSecundaria:'	#FFD700'
  },

]
  
const [personagens,setPersonagens] = useState([])
const aoNovoPersongemAdicionado = (personagem) =>{
console.log(personagem)
personagens.push(personagem)
setPersonagens([...personagens,personagem])
}


  return (
    
  // Fragmento
 <div className='app-estilo'>
  <Header/>
  <Banner/>
  <Formulario  times={times.map(time => time.nome)}   aoPersonagemCadastrado={personagem => aoNovoPersongemAdicionado(personagem)}/>
  {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} personagens={personagens.filter(personagem => personagem.time === time.nome)}/>)}
    <Rodape/>
 </div>

  );
}

export default App;
