import React, { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";
import styles from '../styles/Home.module.css'
import Loading from "./Loading";

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

    const orderAZ = () => {
        const ListaAux = [...produtos].sort((a, b) => a.title.localeCompare(b.title));
        setProdutos(ListaAux);
    };

    const orderZA = () => {
        const ListaAux = [...produtos].sort((a, b) => a.title.localeCompare(b.title));
        ListaAux = ListaAux.reverse();
        setProdutos(ListaAux);
    };


    return (
        
        <div className={styles.home}> 
            <h1 className={styles.titulo}>❁Bem-vindo à Página Inicial!❁</h1>
            <p className={styles.descricao}>Essa é a nossa página principal.</p>
            <button onClick={()=> orderAZ()}>Az</button>
            <button onClick={()=> orderZA()}>Za</button>
    
            <ListarProdutos lista={produtos} />
        </div>
    );
}
