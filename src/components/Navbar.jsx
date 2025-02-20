import { Badge } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider"; // Importa el contexto correctamente

const Navbar = () => {
    const { listaCompras } = useContext(CarritoContext); // Usa el contexto correcto

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Carrito</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/compras">Compras</NavLink>
                        </li>
                    </ul>
                    <NavLink to="/carrito" className="ms-auto">
                        <Badge badgeContent={listaCompras.length} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
