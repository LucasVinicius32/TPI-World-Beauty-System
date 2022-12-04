import React from 'react'
import NavBar from '../../navbar/navbar'


export const EditarProduto = () => {
  return (
    <>
    <NavBar />
    <main>
      <div className="container">
         <h2>Atualizar dados do Produto</h2>
        <form>
          <div className="detail">
            <div className="input-box">
              <span>Nome</span>
              <input
            //   onChange={handChange}
                name="nome"
                placeholder="Digite o Nome do Produto"
                required
              />
            </div>
            <div className="input-box">
              <span>Valor</span>
              <input
                // onChange={handChange}
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
                // onChange={handChange}
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
            //   onClick={() => CreateProdutos(Produtos)}
            />
          </div>
        </form>
      </div>
    </main>
  </>
  )
}
