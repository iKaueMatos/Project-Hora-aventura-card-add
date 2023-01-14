import React from "react";
import Button from "../botao/botao";
import Form from "../form/form";
import Lista from "../lista/lista";
import { useState } from 'react';
import './formulario.css';



const Formulario = (props) => {
    
    const [nome,setNome] = useState('')
    const [TipoDoPoder,setPoder] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    //Função callback
    const AoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            TipoDoPoder,
            imagem,
            time
        })
        setNome('')
        setPoder('')
        setTime('')
        setImagem('')
    }
// mandatory = Obrigatorio
    return(
        <div className="conteudo-formulario">
            <section className="formulario-caixa">
                    <form onSubmit={AoSalvar}> 
                        <h2 className="Titulo-formulario">Preecha os dados para adicionar seu Personagem!</h2> 
                    
                    <Form mandatory={true} label="Nome:" placeholder="Digite seu nome" valor={nome} 
                     aoAlterado={valor => setNome(valor)}
                   
                    />
                    <Form mandatory={true} label="Tipo do Poder:" placeholder="Digite o tipo do seu poder" valor={TipoDoPoder}
                    aoAlterado={valor => setPoder(valor)} 
                    />

                    <Form mandatory={true} label="Imagem:"  placeholder="Digite o endereço da sua imagem" valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                    />

                    <Lista label="Escolha:" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                    <Button texto="Adicionar" />
                    </form>
            </section>
        </div>
    )  
};




export default Formulario;