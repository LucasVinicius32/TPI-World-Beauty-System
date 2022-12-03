import React from "react";
import { DeleteCliente } from "../../services/request";
import './styleBotao.css'
export default function CardConsumo(props) {
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
        <button onClick={handleClick} className ="editar">Editar</button>
        <a href="/lista_cliente"><button onClick={() => DeleteCliente(props.id)} className ="Excluir">Excluir</button></a> 
      </td>
    </tr>
  );

}