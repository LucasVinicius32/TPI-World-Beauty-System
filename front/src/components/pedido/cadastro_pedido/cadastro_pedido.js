import React , { useState } from 'react'
import NavBar from '../../navbar/navbar'
import { CreatePedido } from '../../../services/request'
import './style.css'

const CadastroPedido = () => {

  const [Pedido, setValues] = useState([]);
  
  const handChange = (value) => {
      setValues(preValue => ({

          ...preValue,
          [value.target.name]: value.target.value,

      }))
  }

  return (
    <>
    <NavBar />
    <main>
      <div className="container">
        <h2>Cadastro de Pedidos</h2>
        <form>
          <div className="detail">
            <div className="input-box">
              <span>CPF</span>
              <input
                onChange={handChange}
                type="text"
                name="cpf"
                maxLength={12}
                placeholder="Ex: 000000000-00"
                required
              />
            </div>
            <div className="input-box">
              <span>ID do Produto</span>
              <input
                onChange={handChange}
                type="text"
                name="id_produto"
                maxLength={10}
                placeholder="Ex: 00000000-0"
                required
              />
            </div>
            <div className="input-box">
              <span>Quantidade</span>
              <select onChange={handChange} name="quantidade">
              <option value="" selected>
                Selecione
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            </div>
          </div>

          <div className="button-registration">
            <input
            onClick={() => CreatePedido(Pedido)}
              type="submit"
              value="CADASTRAR"
            />
          </div>
        </form>
      </div>
    </main>
  </>
  )
}

export default CadastroPedido