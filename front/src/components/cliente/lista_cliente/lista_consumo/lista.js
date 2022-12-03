import React ,{useEffect, useState}from 'react'
import CardConsumo from '../../../CardClientes/CardConsumo'
import { gettopLass10consumidores } from '../../../../services/request'

const ListaConsumo = () => {

  const [cliente, setCliente] = useState([])


  useEffect(() => {
    gettopLass10consumidores().then((response) => setCliente(response));
  }, []);

  return (
    <main>
    <div className='title'>
        <h1 className="title-table">
            Lista dos Clientes 10
        </h1>
        <p>que menos consumiram produtos</p>
    </div>

    <div className="table-section">
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>RG</th>
                    <th>Telefone</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {
        cliente && cliente.map((cliente) => {
          return ( 
            <CardConsumo
            key={cliente.cliente.id_cliente}
            id={cliente.cliente.id_cliente}
            nome={cliente.cliente.nome}
            cpf={cliente.cliente.cpf}
            rg={cliente.cliente.rg}
            telefone={cliente.cliente.telefone}
            quantidade = {cliente.qntConsumida}
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

export default ListaConsumo