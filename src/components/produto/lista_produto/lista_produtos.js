import React ,{useEffect, useState} from 'react'
import CardProduto from '../../Card/CardProduto'
import { getAllProdutos } from '../../../services/request'
import NavBar from '../../navbar/navbar'
import ListaProdutoGenero from './lista_genero/lista'
import ListaProdutoConsumo from './lista_consumo/lista'


export const ListaProduto = () => {
  const [produtos, setProdutos] = useState([])


  useEffect(() => {
    getAllProdutos().then((response) => setProdutos(response));
  }, []);


  return (
    <>
      <NavBar />
      <ListaProdutoGenero />
      <ListaProdutoConsumo />
    </>
  )
}
