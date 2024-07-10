import './Formulario.css'
import CampoTexto from '../CampoTexto/';
import ListaSuspensa from '../ListaSuspensa/';
import Botao from '../Botao/';
import { useState } from 'react';

const Formulario = (props) => {

    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')
    const[favorito, setFavorito] = useState('')
    const[nomeTime, setNomeTime] = useState('')
    const[corTime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            favorito
        })
        setFavorito('')
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    type='text'
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    type='text'
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    type='text'
                    label="Imagem"
                    placeholder="Digite o endereco da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto="Criar Card"/>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime,cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time:</h2>
                <CampoTexto 
                    obrigatorio
                    type='text'
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto 
                    obrigatorio 
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto="Criar Time"/>
            </form>
        </section>
    )
}

export default Formulario