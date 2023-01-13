import './botao.css';

const Button = (props) => {
    return(
        <button className='button'>
            {props.texto}
        </button>

    )
}


export default Button;