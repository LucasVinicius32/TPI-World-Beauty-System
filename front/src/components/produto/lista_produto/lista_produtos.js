import React ,{useEffect, useState} from 'react'
import CardProduto from '../../Card/CardProduto'
import { getAllProdutos } from '../../../services/request'
import NavBar from '../../navbar/navbar'
import './style.css'

const ListaProduto = () => {
  const [produtos, setProdutos] = useState([])


  useEffect(() => {
    getAllProdutos().then((response) => setProdutos(response));
  }, []);


  return (
    <>
      <NavBar />
      <main>
        <h1 className="title-table">
          Lista de Produtos 
        </h1>
        
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Marca</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
            {
                produtos && produtos.map((produtos) => {
                  return ( 
                    <CardProduto
                      key={produtos.id}
                      id={produtos.id_produto}
                      nome={produtos.nome}
                      valor={produtos.valor}
                      marca={produtos.marca}
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

export default ListaProduto