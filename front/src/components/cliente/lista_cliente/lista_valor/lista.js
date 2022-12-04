import React ,{useEffect, useState}from 'react'
import CardClienteValor from '../../../CardClientes/CardClienteValor'
import { get05topConsumidoresValor } from '../../../../services/request'

const ListaValor = () => {

  const [cliente, setCliente] = useState([])


  useEffect(() => {
    get05topConsumidoresValor().then((response) => setCliente(response));
  }, []);


  return (
    <main>
    <div className='title'>
        <h1 className="title-table">
            Lista dos Clientes 05
        </h1>
        <p>que mais consumiram em valor</p>
    </div>

    <div className="table-section">
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>RG</th>
                    <th>Telefone</th>
                    <th>Valor Gasto</th>
                </tr>
            </thead>
            <tbody>
                {
        cliente && cliente.map((cliente) => {
          return ( 
            <CardClienteValor
            key={cliente.cliente.id_cliente}
            id={cliente.cliente.id_cliente}
            nome={cliente.cliente.nome}
            cpf={cliente.cliente.cpf}
            rg={cliente.cliente.rg}
            telefone={cliente.cliente.telefone}
            valor = {cliente.valor}
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

export default ListaValor