import { createContext } from "react";

export const CarritoContext = createContext({
  listaCompras: [],
  agregarCompra: () => {},
  aumentarCantidad: () => {},
  disminuirCantidad: () => {},
  eliminarCompra: () => {},
});
