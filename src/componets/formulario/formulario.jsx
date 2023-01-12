import React from "react";
import Form from "../form/form";
import Lista from "../lista/lista";
import './formulario.css';



function Formulario() {
    const times = ['Humanos',
    'Mostros',
    'Animais',
    'Robos',
    ]

    return(
        <div>
            <section className="formulario-caixa">
                    <form> 
                        <h2>Preencha os dados para criar o Card do Personagem</h2> 
                    <Form label="Nome:" placeholder="Digite seu nome"/>
                    <Form label="Tipo de Poder:" placeholder="Digite o tipo do seu poder" />
                    <Form label="Imagem:"  placeholder="Digite o endereço da sua imagem"/>
                    <Lista itens={times}/>
                    </form>
            </section>
        </div>
    )  
};




export default Formulario;