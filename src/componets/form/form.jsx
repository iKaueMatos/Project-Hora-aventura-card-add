import './form.css';





const Form = (props) => {


   // let valor = ''

   //Hook - const [Valor,setValor] = useState('')

    const Digitar = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="form">
             <label>{props.label}</label>
             <input value={props.valor} onChange={Digitar} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
       

    )
}

export default Form;