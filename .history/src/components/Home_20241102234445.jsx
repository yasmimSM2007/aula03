import React, { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";
import styles from '../styles/Home.module.css'

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

    return (
        
        <div className={styles.home}> 
            <h1 className={styles.titulo}>🎀Bem-vindo à Página Inicial!🎀</h1>
            <p className={styles.descricao}>Essa é a nossa página principal.</p>
            <ListarProdutos lista={produtos} />
        </div>
    );
}