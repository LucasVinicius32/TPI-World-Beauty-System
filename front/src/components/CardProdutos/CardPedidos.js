import React from "react";
import { DeleteProdutos } from "../../services/request";
export default function CardProdutosMoreConsumidos(props) {
  function handleClick() {
    window.location.href =
      "/editar_produto?id=" +
      props.id 
  }


  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.nome}</td>
      <td>R$ {props.valor_total} </td>
      <td>{props.marca}</td>
      <td> {props.quantidade} </td>
      <td>
        <button onClick={handleClick} className="editar">Editar</button>
        <a href="/lista_produto"><button onClick={() => DeleteProdutos(props.id)} className="Excluir" >Excluir</button></a> 
      </td>
    </tr>
  );

}