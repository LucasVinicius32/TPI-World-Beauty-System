import React from 'react'

export const ListProdutoGenero = () => {
    return (
        <main>
            <div className='title'>
                <h1 className="title-table">
                    Lista dos Produtos
                </h1>
                <p>que mais foram consumidos por gênero</p>
            </div>

            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Marca</th>
                            <th>Gênero</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            produtos && produtos.map((produtos) => {
                                return (
                                    <CardProduto
                                        key={produtos.id}
                                        id={produtos.id_produto}
                                        nome={produtos.nome}
                                        valor={produtos.valor}
                                        marca={produtos.marca}
                                    />
                                )
                            })
                        } */}
                       
                    </tbody>
                </table>
            </div>

        </main>
    )
}
