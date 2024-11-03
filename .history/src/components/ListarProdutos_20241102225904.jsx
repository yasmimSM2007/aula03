import styles from '../styles/ListaProdutos.module.css'
export default function ListarProdutos({ lista }) {
    
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
                    </li>
                ))}
            </ul>
        </>
    );
} 
            