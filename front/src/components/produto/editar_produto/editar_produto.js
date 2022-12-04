import React, {useState} from 'react'
import NavBar from '../../navbar/navbar'
import { UpdateProdutos } from '../../../services/request';

const EditarProduto = () => {
  const [Produtos, setValues] = useState([]);
  
  const handChange = (value) => {
      setValues(preValue => ({

          ...preValue,
          [value.target.name]: value.target.value,

      }))
  }

  var id = window.location.search.split('=')[1];

  return (
    <>
    <NavBar />
    <main>
      <div className="container">
         <h2>Atualizar dados do Produto</h2>
        <form>
          <div className="detail">
            <div className="input-box">
              <span>Novo Nome</span>
              <input
              onChange={handChange}
                name="nome"
                placeholder="Digite o Nome do Produto"
                required
              />
            </div>
            <div className="input-box">
              <span>Novo Valor</span>
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
              <span>Nova Marca</span>
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
              value="Atualizar"
              onClick={() => UpdateProdutos(Produtos,id)}
            />
          </div>
        </form>
      </div>
    </main>
  </>
  )
}

export default EditarProduto