import express from "express";
import ClienteControllers from "../controllers/ClienteControllers";
import PedidosControllers from "../controllers/PedidosControllers";
import ProdutosControllers from "../controllers/ProdutosControllers";


const route = express.Router();
// rota para dar hello world


route.get("/clientegetall",
ClienteControllers.getAll
)

route.get(
"/cliente/getbyid/:id",
 ClienteControllers.getById);


route.post(
    "/cliente",
    ClienteControllers.create
  );

route.delete(
    "/cliente/:id",
    ClienteControllers.delete
)
route.post (
    "/clienteUpdate/:id",
    ClienteControllers.update
)
// ------------------------------------------------------------------------------------------------------------------------------
route.post(
  "/pedidos",
  PedidosControllers.create

);

route.delete(
    "/pedidos/:id",
    PedidosControllers.delete
)

route.get(
    "/pedido/getById/:id",
    PedidosControllers.getById);
route.get("/pedidos/getall",
PedidosControllers.getAll)

// ------------------------------------------------------------------------------------------------------------------------------
route.post(
  "/produtos",
  ProdutosControllers.create
);

route.delete(
    "/produto/:id",
    ProdutosControllers.delete
)

route.get(
    "/produto/getById/:id",
    ProdutosControllers.getById);

route.post(
    "/produtoUpdate/:id",
    ProdutosControllers.update
)
route.get(
    "/produto/getAll",
    ProdutosControllers.getAll
)


export default route;