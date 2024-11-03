import { useEffect, useState } from "react";
import ListarProdutos from "./components/ListarProdutos";

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        console.log("useEffect chamado"); // Log para verificar se o efeito é acionado
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                console.log("Dados recebidos:", dados); // Log dos dados recebidos
                setProdutos(dados);
            } catch (erro) {
                console.error("Erro ao buscar produtos:", erro); // Log do erro
                alert('Ocorreu um erro na comunicação com o servidor');
            }
        };
    
        receberListaProdutos();
    }, []);
}