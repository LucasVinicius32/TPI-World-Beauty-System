import React from "react";
import { DeleteCliente } from "../../services/request";
export default function Card(props) {
  function handleClick() {
    window.location.href =
      "/editar_cliente?id=" +
      props.id 
  }
  return (
    <tr>
      <td>{props.nome}</td>
      <td> {props.cpf}</td>
      <td>{props.rg}</td>
      <td>{props.telefone}</td>
      <td>{props.quantidade}</td>
      <td>
        <button onClick={handleClick}>Editar</button>
        <a href="/lista_cliente"><button onClick={() => DeleteCliente(props.id)}>Excluir</button></a> 
      </td>
    </tr>
  );

}