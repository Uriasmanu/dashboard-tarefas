import './_Pesquisar.scss'
import lupa from '../../../imagem/Search.svg'

const Pesquisar = () => {
    return (
        <div className="ContainerPesquisar">
            <img src={lupa} alt="" />
            <input type="text" placeholder='Pesquisar' />
        </div>
    )
}

export default Pesquisar