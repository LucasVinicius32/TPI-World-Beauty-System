import React from "react";
import { DeletePedidos } from "../../services/request";
export default function PedidoCard(props) {


  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.id_produto}</td> 
     <td>{props.quantidade}</td>
      <td>{props.valor_total}</td>
      <td>{props.id_cliente}</td> 
      <td>
        <a href="/lista_pedido"><button onClick={() => DeletePedidos(props.id)}>Excluir</button></a> 
      </td>
    </tr>
  );

}