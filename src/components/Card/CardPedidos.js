import React from "react";
import { DeletePedidos } from "../../services/request";
export default function CardPedido(props) {

console.log(props);
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.id_produto}</td>
      <td>{props.quantidade}</td>
      <td>R$ {props.valor_total} </td>
      <td>
        <button>Editar</button>
        <a href="/lista_pedido"><button onClick={() => DeletePedidos(props.id)}>Excluir</button></a> 
      </td>
    </tr>
  );

}