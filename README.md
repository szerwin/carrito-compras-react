# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  Con el desarrollo de este ejercicio del carrito de compras se busca mejoara el concepto y manejo del framework react utilizando algunos hooks que se emplean en este frameworks.

  
  Descripción del desarrollo y funcionalidad del carrito de compras:
  Se crea un nuevo proyecto con el framework de react al cual antes de inicializar la creación de componentes se instalan algunas librerias para usar algunos iconos y estilos
  1.Se descarga un favicon desde https://iconos8.es/icon/9671/carrito-de-compras
  2.Se instala librerias para el uso de componentes para dar estilos npm install @mui/material @emotion/react @emotion/styled
  3.Estilo para ver la cantidad de productos que contiene el carrito https://mui.com/material-ui/react-badge/
  4.Instalacion de la libreria npm i @mui/icons-material
  5.Bootstrap <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  6.Api que permite simular la obteción de productos https://fakestoreapi.com/products
  Crear el archivo principal el cual se le llamo CarritoApp.jsx
  Crear la carpeta  components para en ella crear los archivos .jsx de nombre cards, Navbar
  Crear carpeta context para en ella crear los archivos .jsx CarritoContex,CarritoProvider,ProductoContex y ProductoProvider
  Crear carpeta context para en ella crear los archivos .jsx ComprasPage,CarritoPage
  Crear carpeta styles para en ella crear los archivos .CSS cards, listas.

  La funcionalidad básica de este ejercicio del carrito de compras es que me permita consumir una api de productos el cual los pueda agregar al carrito y poder mostralos en una lista  con las opciones de aumentar,disminuir cantidad o elinimar el producto agergado.
  
