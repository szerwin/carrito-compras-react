import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ComprasPage from './pages/ComprasPage';
import CarritoPage from './pages/CarritoPage';
import ProductosProvider from './context/ProductosProvider';
import CarritoProvider from './context/CarritoProvider';

const CarritoApp = () => {
  return (
    <ProductosProvider> 
      <CarritoProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/compras" element={<ComprasPage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/" element={<Navigate to="/compras" />} />
          </Routes>
        </Router>
      </CarritoProvider>
    </ProductosProvider>
  );
};

export default CarritoApp;
