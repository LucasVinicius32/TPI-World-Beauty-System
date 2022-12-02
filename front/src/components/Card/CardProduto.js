import React from "react";
import { DeleteProdutos } from "../../services/request";
export default function CardProduto(props) {


  return (
    <tr>
      <td>{props.nome}</td>
      <td> R$ {props.valor}</td>
      <td>{props.marca}</td>
      <td>
        <button>Editar</button>
        <a href="/lista_produto"><button onClick={() => DeleteProdutos(props.id)}>Excluir</button></a> 
      </td>
    </tr>
  );

}