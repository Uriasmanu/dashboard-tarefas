import './_Titulo.scss'
import logo from '../../../imagem/content_team.svg'

const Titulo = () => {
    return (
        <div className="ContainerTitulo">
            <img src={logo} alt="logo tarefas" />
            <h2>DashBoard Tarefas</h2>
        </div>
    )
}

export default Titulo