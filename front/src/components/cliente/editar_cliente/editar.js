import React from 'react'
import NavBar from '../../navbar/navbar'

const Editar = () => {
  return (
    <>
    <NavBar />
      <main>
        <div className="container">
          <h2>Atualizar Dados</h2>
          <form>
            <div className="detail">
              <div className="input-box">
                <span>Nome</span>
                <input
                //   onChange={handChange}
                  name="nome"
                  placeholder="Digite seu Nome Completo"
                  required
                />
              </div>
              <div className="input-box">
                <span>CPF</span>
                <input
                //   onChange={handChange}
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
                //   onChange={handChange}
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
                //   onChange={handChange}
                  type="text"
                  name="telefone"
                  maxLength={10}
                  placeholder="Ex: 12 123456789"
                  required
                />
              </div>
              <div className="input-box">
                <span>Gênero</span>
                <select
                  name="opcao2"
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
                // onClick={() => CreateCliente(cliente)}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Editar