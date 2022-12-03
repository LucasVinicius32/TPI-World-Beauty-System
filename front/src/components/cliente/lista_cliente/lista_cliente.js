import React from 'react'
import NavBar from '../../navbar/navbar'
import './style.css'
import ListaQuantidade from './lista_quantidade/lista'
import ListaGenero from './lista_genero/lista'
import ListaConsumo from './lista_consumo/lista'
import ListaValor from './lista_valor/lista'
import ListaGeneroFeminino from './lista_F/listaF'


const ListaCliente = () => {

  return (
    <>
      <NavBar />
        <ListaQuantidade />
        <ListaValor />
        <ListaConsumo />
        <ListaGenero />
        <ListaGeneroFeminino />
       
    </>
  )
}

export default ListaCliente
