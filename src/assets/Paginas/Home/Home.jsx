import DataAtual from '../../Components/DataAtual/DataAtual';
import Notificacao from '../../Components/Notificacao/Notificacao';
import Pesquisar from '../../Components/Pesquisar/Pesquisar';
import SideBar from '../../Components/SideBar/SideBar';
import './_Home.scss'

const Home = () => {
    return (
        <div className="ContainerHome">
            <SideBar />
            <main>
                <section className='topo'>
                    <Pesquisar />
                    <Notificacao />
                </section>
                <section className='controle'>
                    <DataAtual />
                    <p>Nome do board</p>
                </section>
            </main>
        </div>
    )
}

export default Home;