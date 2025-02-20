/* eslint-disable react/prop-types */

const Factura = ({ listaCompras, total, subtotal, impuesto, fechaCompra, cerrarFactura }) => {
  return (
    <div className="mt-4 p-4 border">
      {/* Información de la tienda */}
      <div className="text-center mb-3">
        <h2>🧥🥼🛒 Tienda Dtodito👗🖥💻</h2>
        <p><strong>Dirección:</strong> Calle 123, Popayán, Colombia</p>
        <p><strong>Teléfono:</strong> +57 300 123 4567</p>
        <p><strong>Email:</strong> contacto@mitienda.com</p>
        <p><strong>Síguenos en redes:</strong> @mitiendtodito</p>
      </div>

      <h2>Factura de Compra</h2>
      <p><strong>Fecha:</strong> {fechaCompra}</p>

      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(item.price * item.cantidad).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      <h4>IVA (19%): ${impuesto.toFixed(2)}</h4>
      <h2>Total: ${total.toFixed(2)}</h2>

      {/* Botones */}
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-success" onClick={() => window.print()}>🖨 Imprimir Factura</button>
        <button className="btn btn-secondary mx-2" onClick={cerrarFactura}>Cerrar</button>
      </div>
    </div>
  );
};

export default Factura;
