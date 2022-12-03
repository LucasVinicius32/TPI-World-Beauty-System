import React ,{ useState } from 'react'
import NavBar from '../../navbar/navbar'
import { UpdateCliente } from '../../../services/request';
const Editar = () => {

  const [cliente, setValues] = useState([]);

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
          <h2>Atualizar Dados</h2>
          <form>
            <div className="detail">
              <div className="input-box">
                <span>Novo Nome</span>
                <input
                  onChange={handChange}
                  name="nome"
                  placeholder="Digite seu Nome Completo"
                  required
                />
              </div>
              <div className="input-box">
                <span>Novo CPF</span>
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
                <span>Novo RG</span>
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
                <span>Novo Telefone</span>
                <input
                  onChange={handChange}
                  type="text"
                  name="telefone"
                  maxLength={10}
                  placeholder="Ex: 12 123456789"
                  required
                />
              </div>
              <div className="input-box">
                <span>Novo Gênero</span>
                <select
                  onChange={handChange}
                  name="genero"
                  >
                  <option
                    value="todos"
                    selected>
                    Selecione seu Gênero
                  </option>

                  <option
                    value="masculino"
                  >Masculino</option>
                  <option
                    value="feminino"
                  >Feminino</option>

                </select>
              </div>
            </div>

            <div className="button-registration">
               <input
                type="submit"
                value="Atualizar"
                onClick={() => UpdateCliente(cliente,id)}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Editar