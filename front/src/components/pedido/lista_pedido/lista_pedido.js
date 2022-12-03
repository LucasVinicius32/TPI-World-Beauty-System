import React , {useEffect, useState} from 'react'
import NavBar from '../../navbar/navbar'
import PedidoCard from '../../CardPedidos/CardProduto'
import { getAllPedidos } from '../../../services/request'
import './style.css'

const ListaPedido = () => {
  const [pedidos, setPedidos] = useState([])


  useEffect(() => {
    getAllPedidos().then((response) => setPedidos(response));
  }, []);

  return (
    <>
    <NavBar />
    <main>
      <h1 className="title-table">
        Lista de Todos os Pedidos 
      </h1>
      
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>id_pedido</th>
              <th>id_produto</th>
              <th>Quantidade</th>
              <th>Valor_Total</th>
              <th>id_cliente</th>
            </tr>
          </thead>
          <tbody>
          {
                pedidos && pedidos.map((pedidos) => {
                  return ( 
                    <PedidoCard
                      key={pedidos.id}
                      id={pedidos.id_pedido}
                      id_produto = {pedidos.id_produto}
                      quantidade={pedidos.quantidade}
                      valor_total={pedidos.valor_total}
                      id_cliente={pedidos.id_cliente}
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

export default ListaPedido