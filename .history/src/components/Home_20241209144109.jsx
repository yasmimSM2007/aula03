import React, { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";
import styles from '../styles/Home.module.css'
import Loading from "./Loading";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [filtro, setFiltro] = useState("");

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
        const ListaAux1 = [...produtos].sort((a, b) => a.title.localeCompare(b.title));
        setProdutos(ListaAux1);
    };

    const orderZA = () => {
        const ListaAux = [...produtos].sort((a, b) => b.title.localeCompare(a.title));
        setProdutos(ListaAux);
    };

    const precoC = () =>{
        const ListaOrd = [...produtos].sort((a, b) => a.price - b.price);
        setProdutos(ListaOrd)
    }

    const precoD = () =>{
        const ListaOrd = [...produtos].sort((a, b) => b.price - a.price);
        setProdutos(ListaOrd)
    }

    const produtosFiltrados = produtos.filter((produto) =>
        produto.title.toLowerCase().startsWith(filtro.toLowerCase())
    );

    return (
        <div className={styles.home}>
            <h1 className={styles.titulo}>Bem-vindo à Página Inicial!</h1>
            
            <input
                type="text"
                placeholder="Buscar produto..."
                className={styles.input}
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)} 
            />

            <button className={styles.botao} onClick={() => orderAZ()}>Az</button>
            <button className={styles.botao} onClick={() => orderZA()}>Za</button>
            <button className={styles.botao} onClick={precoC}>Valor - + </button>
            <button className={styles.botao} onClick={precoD}>Valor + - </button>
            <ListarProdutos lista={produtosFiltrados} />
        </div>
    );
}