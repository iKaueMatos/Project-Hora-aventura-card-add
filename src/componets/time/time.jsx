import Colaborador from '../Personagens/personagens';
import './time.css'


const Time = (props) =>{

    const css ={background:props.corSecundaria}
    return(
        //Expressao codicional em javascript
        props.personagens.length > 0 &&<section className='time'  style={css}>
            <h3>{props.nome}</h3>
            <div className='colaboradores-personagens' style={{overflow:'hidden',height:600}}>
            {props.personagens.map(Personagem => <Colaborador nome={Personagem.nome} TipoDoPoder={Personagem.TipoDoPoder} imagem={Personagem.imagem}/>)}
            </div>

        </section>

    )
}


export default Time;