import React , {useState, useEffect} from 'react'
import { ProdutosMoreConsumidos } from '../../../../services/request';
import CardProdutosMoreConsumidos from '../../../CardProdutos/CardPedidos';

const ListaProdutoConsumo = () => {

    const [produtos, setProduto] = useState([])


    useEffect(() => {
        ProdutosMoreConsumidos().then((response) => setProduto(response));
    }, []);

    return (
        <main>
            <div className='title'>
                <h1 className="title-table">
                    Lista dos Produtos
                </h1>
                <p>que mais foram consumidos</p>
            </div>

            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Id_Produto</th>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Marca</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos && produtos.map((produtos) => {
                                return (
                                    <CardProdutosMoreConsumidos
                                        key={produtos.produto.id_produto}
                                        id={produtos.produto.id_produto}
                                        nome={produtos.produto.nome}
                                        valor_total={produtos.produto.valor}
                                        marca={produtos.produto.marca}
                                        quantidade = {produtos.qntConsumida}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </main>
    )
}

export default ListaProdutoConsumo