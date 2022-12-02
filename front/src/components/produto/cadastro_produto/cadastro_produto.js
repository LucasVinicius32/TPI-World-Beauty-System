import React , { useState } from 'react'
import NavBar from '../../navbar/navbar'
import { CreateProdutos } from '../../../services/request'
import './style.css'

const CadastroProduto = () => {

  const [Produtos, setValues] = useState([]);
  
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
         <h2>Cadastro de Produtos</h2>
        <form>
          <div className="detail">
            <div className="input-box">
              <span>Nome</span>
              <input
              onChange={handChange}
                name="nome"
                placeholder="Digite o Nome do Produto"
                required
              />
            </div>
            <div className="input-box">
              <span>Valor</span>
              <input
                onChange={handChange}
                type="text"
                name="valor"
                maxLength={12}
                placeholder="Ex: 99,99"
                required
              />
            </div>
            <div className="input-box">
              <span>Marca</span>
              <input
                onChange={handChange}
                type="text"
                name="marca"
                maxLength={10}
                placeholder="Ex: Adidas"
                required
              />
            </div>
          </div>

          <div className="button-registration">
            <input
              type="submit"
              value="CADASTRAR"
              onClick={() => CreateProdutos(Produtos)}
            />
          </div>
        </form>
      </div>
    </main>
  </>
  )
}

export default CadastroProduto