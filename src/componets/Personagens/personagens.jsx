import './personagens.css';




const Personagem = (props) => {
    return (
        <div className='personagem'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nome}/>
            </div>
                <div className='rodape'>
                    <h4>{props.nome}</h4>
                    <h5>{props.TipoDoPoder}</h5>
                </div>
        </div>


    )
}

export default Personagem;