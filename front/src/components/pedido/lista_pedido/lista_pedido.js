import React , {useEffect, useState} from 'react'
import NavBar from '../../navbar/navbar'
import CardPedido from '../../Card/CardPedidos'
import { getAllPedidos } from '../../../services/request'
import './style.css'

const ListaPedido = () => {
  const [pedidos, setPedidos] = useState([])


  useEffect(() => {
    getAllPedidos().then((response) => setPedidos(response));
  }, []);

  // console.log(pedidos);
  return (
    <>
    <NavBar />
    <main>
      <h1 className="title-table">
        Lista de Pedidos 
      </h1>
      
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>id_pedido</th>
              <th>id_produto</th>
              <th>Quantidade</th>
              <th>Valor_Total</th>
            </tr>
          </thead>
          <tbody>
          {
                pedidos && pedidos.map((pedidos) => {
                  return ( 
                    <CardPedido
                      key={pedidos.id}
                      id={pedidos.id_pedido}
                      quantidade={pedidos.quantidade}
                      valor_total={pedidos.valor_total}
                      id_cliente={pedidos.id_cliente}
                      id_produto = {pedidos.id_produto}
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