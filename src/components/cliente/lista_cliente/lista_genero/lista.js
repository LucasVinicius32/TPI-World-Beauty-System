import React from 'react'

export const ListaGenero = () => {
  return (
    <main>
            <div className='title'>
                <h1 className="title-table">
                    Lista dos Clientes
                </h1>
                <p>classificados por gênero</p>
            </div>

            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>RG</th>
                            <th>Telefone</th>
                            <th>Gênero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                cliente && cliente.map((cliente) => {
                  return ( 
                    <Card
                      key={cliente.id}
                      id={cliente.id_cliente}
                      nome={cliente.nome}
                      cpf={cliente.cpf}
                      rg={cliente.rg}
                      telefone={cliente.telefone}
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
