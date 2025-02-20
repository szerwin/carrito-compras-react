/* eslint-disable react/prop-types */

import { useState } from "react";
import '../styles/cards.css'

export const Cards = ({ imagen, precio, titulo, descripcion, handleAgregar, handleQuitar,  }) => {
    const [agregar, setAgregar] = useState(false)

    const agregarCarrito = () => {
        handleAgregar()
        setAgregar(true)
    }
    const quitar = () => {
        handleQuitar()
        setAgregar(false)
    }


    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p> 
                <p className="tarjeta-precio">{precio}</p>
                {agregar
                    ? <button
                        type="button"
                        className="boton-quitar"
                        onClick={quitar}
                    >quitar  del carrito</button>

                    : <button
                        type="button"
                        className="boton-agregar"
                        onClick={agregarCarrito}
                    >agregar al carrito</button>
                }
            </div>


        </div>
    );
};

export default Cards;
