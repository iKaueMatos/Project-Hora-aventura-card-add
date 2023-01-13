import React from "react";
import Button from "../botao/botao";
import Form from "../form/form";
import Lista from "../lista/lista";
import { useState } from 'react';
import './formulario.css';



const Formulario = () => {
    
    const times = ['Humanos',
    'Mostros',
    'Animais',
    'Robos',
    ]


    const [nome,setNome] = useState('')
    const [TipoDoPoder,setPoder] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    //Função callback
    const Aosalvar = (evento) =>{
        evento.preventDefault()
        console.log("Formulario submetido =>",nome,TipoDoPoder,imagem,time)
    }
// mandatory = Obrigatorio
    return(
        <div>
            <section className="formulario-caixa">
                    <form onSubmit={Aosalvar}> 
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

                    <Lista label="Escolha:" itens={times} valor={time} aoAlterado={valor => setTime(valor)}/>
                    <Button texto="Adicionar" />
                    </form>
            </section>
        </div>
    )  
};




export default Formulario;