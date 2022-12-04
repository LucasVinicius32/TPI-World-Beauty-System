import React ,{useEffect, useState}from 'react'
import CardMasculino from '../../../CardClientes/CardClienteMasculino'
import { getAllCliente } from '../../../../services/request'

const ListaGenero = () => {

    const [clienteMasculino, setCliente] = useState([])


    useEffect(() => {
    getAllCliente().then((response) => setCliente(response));
    }, []);
    return (
        <main>
            <div className='title'>
                <h1 className="title-table">
                    Lista dos Clientes
                </h1>
                <p>classificados por gênero masculino </p>
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
                        {
                clienteMasculino  && clienteMasculino.map((cliente) => {
                  return ( cliente.genero == 'masculino' ?(
                    <CardMasculino 
                      key={cliente.id}
                      id={cliente.id_cliente}
                      nome={cliente.nome}
                      cpf={cliente.cpf}
                      rg={cliente.rg}
                      telefone={cliente.telefone}
                      genero = {cliente.genero}
                    />): null
                  )
                })
              }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListaGenero