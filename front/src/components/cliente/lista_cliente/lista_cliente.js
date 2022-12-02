import React ,{useEffect, useState}from 'react'
import Card from '../../Card/CardCliente'
import { getAllCliente } from '../../../services/request'
import NavBar from '../../navbar/navbar'
import './style.css'
import ListaQuantidade from './lista_quantidade/lista'
import ListaGenero from './lista_genero/lista'
import ListaConsumo from './lista_consumo/lista'
import ListaValor from './lista_valor/lista'



const ListaCliente = () => {
  // const [cliente, setCliente] = useState([])


  // useEffect(() => {
  //   getAllCliente().then((response) => setCliente(response));
  // }, []);


  return (
    <>
      <NavBar />
        <ListaQuantidade />
        <ListaGenero />
        <ListaConsumo />
        <ListaValor />
    </>
  )
}

export default ListaCliente
