import React ,{useEffect, useState}from 'react'
import Card from '../../Card/CardCliente'
import { getAllCliente } from '../../../services/request'
import NavBar from '../../navbar/navbar'
import './style.css'



const ListaCliente = () => {
  const [cliente, setCliente] = useState([])


  useEffect(() => {
    getAllCliente().then((response) => setCliente(response));
  }, []);


  return (
    <>
      <NavBar />
      <main>
        <h1 className="title-table">
          Lista  de Usuários 
        </h1>
        
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {
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
              }
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default ListaCliente
