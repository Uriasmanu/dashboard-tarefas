import BotaoCriarTarefa from '../../Components/BotaoCriarTarefa/BotaoCriarTarefa';
import DataAtual from '../../Components/DataAtual/DataAtual';
import Filter from '../../Components/Filter/Filter';
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
                    <div className='texto'>
                        <DataAtual />
                        <p>Nome do board</p>
                    </div>

                    <div className="botoes">
                        <Filter />
                        <BotaoCriarTarefa />
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Home;