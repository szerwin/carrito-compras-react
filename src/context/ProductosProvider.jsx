import { createContext, useState, useEffect } from "react";

export const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };
        fetchProductos();
    }, []);

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    );
};

export default ProductosProvider; 