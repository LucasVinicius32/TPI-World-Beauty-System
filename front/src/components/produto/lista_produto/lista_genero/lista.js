import React , {useState, useEffect} from 'react'
import { ProdutosMoreConsumidos } from '../../../../services/request';
import MasculinoCard from '../../../CardProdutos/MasculinoCard';
const ListaProdutoGenero = () => {
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
                <p>que mais foram consumidos por gênero Masculino</p>
            </div>

            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Marca</th>
                            <th>Quantidade</th>
                            <th>Gênero</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                    {
                            produtos && produtos.map((produtos) => {
                                return ( produtos.produto.genero === "masculino" ?(
                                    <MasculinoCard
                                        key={produtos.produto.id_produto}
                                        id={produtos.produto.id_produto}
                                        nome={produtos.produto.nome}
                                        valor_total={produtos.produto.valor}
                                        marca={produtos.produto.marca}
                                        quantidade = {produtos.qntConsumida}
                                        genero = {produtos.produto.genero}
                                    />) : null
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </main>
    )
}

export default ListaProdutoGenero