import React from 'react'
import NavBar from '../../navbar/navbar'
import ListaProdutoGenero from './lista_genero/lista'
import ListaProdutoConsumo from './lista_consumo/lista'
import ListaProdutoGeneroFeminino from './lista_genero/listaF'

const ListaProduto = () => {



  return (
    <>
      <NavBar />
      <ListaProdutoConsumo />
      <ListaProdutoGenero />
      <ListaProdutoGeneroFeminino />
   
    </>
  )
}

export default ListaProduto