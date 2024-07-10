import './Time.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {
    const css = {backgroundColor: hexToRgba(props.cor, 0.6), backgroundImage: 'url(/imagens/fundo.png)'}

    return (
        props.colaboradores.length > 0 &&
            <section className='time' style={css}>
                <input onChange={evento => props.mudarCor(evento.target.value,props.id)} value={props.cor} type='color' className='type__color' />
                <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
                <div className='colaboradores'></div>
                {props.colaboradores.map(colaborador => {
                     return <Colaborador 
                                corDeFundo={props.cor} 
                                key={colaborador.nome} 
                                nome={colaborador.nome} 
                                cargo={colaborador.cargo} 
                                imagem={colaborador.imagem} 
                                aoDeletar={props.aoDeletar}
                                favorito={colaborador.favorito}
                                aoFavoritar={props.aoFavoritar}
                            />
                })}
            </section>
    )
}

export default Time