import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
    

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setProdutos(dados);
            } catch (erro) {
                alert('Ocorreu um erro na comunicação com o servidor');
            }
        };

        receberListaProdutos();
    }, []);

    return <ListarProdutos lista={produtos} />;
}