import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';

import Content from './components/Content';
import Sidebar from './components/Sidebar';

import TopBar from './components/TopBar';
import Clientes from './components/Clientes';
import Crearcliente from './components/CrearCliente';
import CrearProductos from './components/CrearProductos';
import Productos from './components/Productos';
import Facturas from './components/Facturas';
import CrearFactura from './components/CrearFactura';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

     


    }
  }




 














  render() {






    return (
      <BrowserRouter>




        <Sidebar />




        <div className='main'>
          <TopBar />
          <Routes>

            <Route path='/clientes' element={<div className='contenedorClientes'><Clientes /></div>} />
            <Route path='/crearcliente/' element={<Crearcliente />} />
            <Route path='/productos/' element={<CrearProductos />} />
            <Route path='/facturas/' element={<Facturas />} />
            <Route path='/crearfactura/' element={<CrearFactura />} />






          </Routes>

        </div>




        <Content />

      </BrowserRouter>
    )

  }

}

export default App;