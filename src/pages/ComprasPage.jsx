import { useContext } from "react";
import Cards from "../components/Cards";
import { ProductosContext } from "../context/ProductosProvider"; 
import { CarritoContext } from "../context/CarritoProvider";

const ComprasPage = () => {
    const { productos } = useContext(ProductosContext);
    const { listaCompras, agregarCompra, eliminarCompra, aumentarCantidad,  } = useContext(CarritoContext);
     
    const handleAgregar = (producto) => {
        // Verificar si el producto ya está en el carrito
        const productoExistente = listaCompras.find((item) => item.id === producto.id);
        
        if (productoExistente) {
            aumentarCantidad(producto.id);
        } else {
            agregarCompra({ ...producto, cantidad: 1 }); 
        }
    };

    const handleQuitar = (id) => {
        eliminarCompra(id);
    };

    return (
        <>
            <h1>Productos Disponibles</h1>
            <hr />
            <div className="tarjetas-container">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <Cards
                            key={producto.id}
                            imagen={producto.image}
                            titulo={producto.title}
                            descripcion={producto.description}
                            precios={`$${producto.price}`}
                            handleAgregar={() => handleAgregar(producto)}
                            handleQuitar={() => handleQuitar(producto.id)}
                        />
                    ))
                ) : (
                    <p>Cargando productos...</p>
                )}
            </div>
        </>
    );
};

export default ComprasPage;
