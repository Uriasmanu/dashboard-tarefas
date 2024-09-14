import './_DataAtual.scss';
import { useState, useEffect } from 'react';

const DataAtual = () => {
    const [dataAtual, setDataAtual] = useState('');

    useEffect(() => {
        const data = new Date();
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
        const ano = data.getFullYear();

        setDataAtual(`${dia}/${mes}/${ano}`);
    }, []);

    return (
        <div className="ContainerDataAtual">
            <p>Data</p>
            {dataAtual}
        </div>
    );
}

export default DataAtual;
