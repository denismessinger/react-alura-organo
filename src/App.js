import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4}  from 'uuid';


function App() {

  const [times,setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programacao',
      cor: '#d9f7e9'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#e8f8ff'
    },
    {
      id: uuidv4(),
      nome: 'Data-Sciense',
      cor: '#f0f8f2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#fde7eb'
    },
    {
      id: uuidv4(),
      nome: 'Ux e Design',
      cor: '#fae9f5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#fff5d9'
    },
    {
      id: uuidv4(),
      nome: 'Inovacao e gestao',
      cor: '#ffeedf'
    }
  ])
  
  const[colaboradores, setColaborador] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
  } 

  function deletarColaborador(nome) {
    setColaborador(colaboradores.filter(colaborador => colaborador.nome != nome))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
        if(time.id === id) {
          time.cor = cor;
        }
        return time;
      }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {id: uuidv4(), ...novoTime}])
  }

  function resolveFavorito(nome) {
    setColaborador(colaboradores.map(colaborador => {
      if(colaborador.nome === nome) {
        if (colaborador.favorito === ''){
          colaborador.favorito = true
        } else {
          colaborador.favorito = !colaborador.favorito;
        }
      }
      console.log(colaborador)
      return colaborador; 
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
          cadastrarTime={cadastrarTime}
          times={times.map(time => time.nome)} 
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times?.map(time => 
        <Time 
          key={time.nome} 
          id={time.id}
          nome={time.nome} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          aoFavoritar={resolveFavorito}
        />)}
    </div>
  );
}

export default App;
