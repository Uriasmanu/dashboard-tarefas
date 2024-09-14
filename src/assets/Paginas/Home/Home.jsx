import Pesquisar from '../../Components/Pesquisar/Pesquisar';
import SideBar from '../../Components/SideBar/SideBar';
import './_Home.scss'

const Home = () => {
    return (
        <div className="ContainerHome">
            <SideBar/>
            <main>
                <Pesquisar/>
            </main>
        </div>
    )
}

export default Home;