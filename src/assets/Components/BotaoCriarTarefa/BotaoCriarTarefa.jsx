import './_BotaoCriarTarefa.scss';

const BotaoCriarTarefa = () => {
    return (
        <button className="ContainerBotaoCriarTarefa">
            <button className="btn">
                <span className="icon">
                    <svg viewBox="0 0 24 24" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="#f0f0f0"/>
                    </svg>
                </span>
                <span className="text">Criar Tarefa</span>
            </button>
        </button>
    );
}

export default BotaoCriarTarefa;
