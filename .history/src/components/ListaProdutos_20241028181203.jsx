import styles from '../styles/listaProdutos.module.css'
export default function ListarProdutos({lista}) {

    return (
        <>
        <ul className={styles.bloco}>
            {produtos.map(produto => (
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p>Preço: R${produto.price}</p>
                    <img crs={produto.imagem} alt={produto.title} width={100} />

                </li>

            ))}

        </ul>

    </>

    )

}