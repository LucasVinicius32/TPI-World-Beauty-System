import React , { useState } from 'react'
import NavBar from '../../navbar/navbar'
import { CreateCliente } from '../../../services/request'
import './style.css'



const CadastroCliente = () => {


  const [cliente, setValues] = useState([]);
  
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
        <h2>Cadastro de Clientes</h2>
          <form>
            <div className="detail">
              <div className="input-box">
                <span>Nome</span>
                <input
                onChange={handChange}
                  name="nome"
                  placeholder="Digite seu Nome Completo"
                  required
                />
              </div>
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
                <span>RG</span>
                <input
                  onChange={handChange}
                  type="text"
                  name="rg"
                  maxLength={10}
                  placeholder="Ex: 00000000-0"
                  required
                />
              </div>
              <div className="input-box">
                <span>Telefone</span>
                <input
                onChange={handChange}
                  type="text"
                  name="telefone"
                  maxLength={10}
                  placeholder="Ex: 12 123456789"
                  required
                />
              </div>
            </div>

            <div className="button-registration">
              <input
                type="submit"
                value="CADASTRAR"
                onClick={() => CreateCliente(cliente)}
              />
            </div>
          </form>
        </div>
      </main>
    </>

  )
}

export default CadastroCliente