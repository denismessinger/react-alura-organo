import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ( {nome, imagem, cargo, favorito, aoFavoritar, corDeFundo, aoDeletar}) => {

    function favoritar() {
        aoFavoritar(nome);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={ () => aoDeletar(nome)} 
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito ? 
                        <AiFillHeart {...propsFavorito} color='#ff0000'/> : 
                        <AiOutlineHeart {...propsFavorito} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador