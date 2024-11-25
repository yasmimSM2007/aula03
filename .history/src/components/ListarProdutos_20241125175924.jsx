import styles from '../styles/ListaProdutos.module.css'
import Loading from './Loading';
export default function ListarProdutos({ lista }) {
    if(lista.length === 0){
        return(
            <Loading/>
        )
    }
    

    return (
        <>
           <h1>Lista de Produtos</h1>
            <ul className={styles.listaProdutos}>
                {lista.map(produto => (
                    <li key={produto.id} className={styles.card}>
                        <img src={produto.image} alt={produto.title} />
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                        <p>Preço: R${produto.price}</p>
                        <button className={styles.botao}>Adicionar ao Carrinho</button>
                        
                    </li>
                ))}
            </ul>
        </>
    );
} 
            