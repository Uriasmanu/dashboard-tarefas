import './_Filter.scss'
import filtro from '../../../imagem/filter.svg'


const Filter = () => {
    return (
        <div className="ContainerFilter">
            <img src={filtro} alt="" />
            <p>Filtro</p>
        </div>
    )
}

export default Filter