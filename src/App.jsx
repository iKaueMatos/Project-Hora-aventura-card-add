import './App.css';
import Banner from './componets/banner/banner.jsx';
import Header from './componets/header/header.jsx';
import Form from './componets/form/form.jsx';

function App() {
  return (
    
  // Fragmento
 <div className='app-estilo'>
  <Header/>
  <Banner/>
  <Form label="Nome:" placeholder="Digite seu nome"/>
  <Form label="Tipo de Poder:" placeholder="Digite o tipo do seu poder" />
  <Form label="Imagem:"  placeholder="Digite o endereço da sua imagem"/>
 </div>

  );
}

export default App;
