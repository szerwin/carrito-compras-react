import { createContext, useReducer } from "react";



export const CarritoContext = createContext();


const initialState = [];

// Reducer para manejar acciones del carrito
const comprasReducer = (state, action) => {
  switch (action.type) {
    case "[CARRITO] agregar compra":
      const productoExistente = state.find((compra) => compra.id === action.payload.id);
      if (productoExistente) {
        return state.map((compra) =>
          compra.id === action.payload.id
            ? { ...compra, cantidad: compra.cantidad + 1 }
            : compra
        );
      } else {
        return [...state, { ...action.payload, cantidad: 1 }];
      }

    case "[CARRITO] aumentar cantidad compra":
      return state.map((compra) =>
        compra.id === action.payload ? { ...compra, cantidad: compra.cantidad + 1 } : compra
      );

    case "[CARRITO] disminuir cantidad compra":
      return state.map((compra) =>
        compra.id === action.payload && compra.cantidad > 1
          ? { ...compra, cantidad: compra.cantidad - 1 }
          : compra
      );

    case "[CARRITO] eliminar compra":
      return state.filter((compra) => compra.id !== action.payload);

    default:
      return state;
  }
};

// Proveedor del contexto
const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => dispatch({ type: "[CARRITO] agregar compra", payload: compra });
  const aumentarCantidad = (id) => dispatch({ type: "[CARRITO] aumentar cantidad compra", payload: id });
  const disminuirCantidad = (id) => dispatch({ type: "[CARRITO] disminuir cantidad compra", payload: id });
  const eliminarCompra = (id) => dispatch({ type: "[CARRITO] eliminar compra", payload: id });

  return (
    <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
