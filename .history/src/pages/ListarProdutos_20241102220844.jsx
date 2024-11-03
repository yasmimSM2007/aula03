export default function ListarProdutos({ lista }) {
    console.log("Lista de produtos:", lista); // Log para verificar a lista recebida

    return (
        <>
            <h1>Lista de Produtos</h1>
            {lista.length === 0 ? (
                <p>Carregando produtos...</p>
            ) : (
                <ul>
                    {lista.map(produto => (
                        <li key={produto.id}>
                            <h2>{produto.title}</h2>
                            <p>{produto.description}</p>
                            <p>Preço: R${produto.price}</p>
                            <img src={produto.image} alt={produto.title} width={100} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
