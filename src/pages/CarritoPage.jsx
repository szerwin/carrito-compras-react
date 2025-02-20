import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoProvider";
import Factura from "../components/Factura"; 

const CarritoPage = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);
  const [mostrarFactura, setMostrarFactura] = useState(false);

  // Calcular precios
  const subtotal = listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0);
  const impuesto = subtotal * 0.19; // IVA del 19%
  const total = subtotal + impuesto;

  // Fecha de compra
  const fechaCompra = new Date().toLocaleDateString();

  return (
    <>
      <h1>Carrito de Compras</h1>
      {listaCompras.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaCompras.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button className="btn btn-sm btn-secondary" onClick={() => disminuirCantidad(item.id)}>-</button>
                    <span className="mx-2">{item.cantidad}</span>
                    <button className="btn btn-sm btn-primary" onClick={() => aumentarCantidad(item.id)}>+</button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => eliminarCompra(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mostrar el total */}
          <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
          <h4>IVA (19%): ${impuesto.toFixed(2)}</h4>
          <h2>Total: ${total.toFixed(2)}</h2>

          {/* Botón para mostrar la factura */}
          <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={() => setMostrarFactura(true)}>Generar Factura</button>
          </div>
        </>
      )}

      {/* Renderizar la factura si mostrarFactura es true */}
      {mostrarFactura && (
        <Factura 
          listaCompras={listaCompras} 
          total={total} 
          subtotal={subtotal} 
          impuesto={impuesto} 
          fechaCompra={fechaCompra} 
          cerrarFactura={() => setMostrarFactura(false)}
        />
      )}
    </>
  );
};

export default CarritoPage;
