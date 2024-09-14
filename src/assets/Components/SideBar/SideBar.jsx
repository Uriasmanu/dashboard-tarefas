import MenuLateral from '../MenuLateral/MenuLateral'
import Titulo from '../Titulo/Titulo'
import './_SideBar.scss'

const SideBar = () => {
    return (
        <div className="ContainerSidebar">
            <Titulo />
            <div className='Menu-Lateral'>
                <MenuLateral />
                <MenuLateral />
            </div>
            <div className='Menu-Lateral'>
                <p>Pequeno titulo</p>
                <MenuLateral />
                <MenuLateral />
                <MenuLateral />
                <MenuLateral />
                <MenuLateral />
            </div>
            <div className='Menu-Lateral'>
                <p>Pequeno titulo</p>
                <MenuLateral />
                <MenuLateral />
            </div>
            <div className='Menu-Lateral'>
                <p>Pequeno titulo</p>
                <MenuLateral />
                <MenuLateral />
            </div>
        </div>
    )
}

export default SideBar