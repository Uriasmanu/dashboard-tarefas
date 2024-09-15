import './_Filter.scss'
import filtro from '../../../imagem/filter.svg'


const Filter = () => {
    return (
        <button className="ContainerFilter">
            <img src={filtro} alt="" />
            <p>Filtro</p>
        </button>
    )
}

export default Filter