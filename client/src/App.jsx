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

      /* nombre: "",


      clientes: [], */



    }
  }




  /* apiCall(url, consecuencia) {
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error))
  }


  componentDidMount() {
    console.log("me monte");
    this.consumirApi();





  }

  consumirApi() {
    this.apiCall("http://localhost:3000/api", this.mostrarGif);


  }

  mostrarGif = (data) => {

    this.setState({
      clientes: data,
      nombre: data[0].nombre,



    })}
 */















  render() {






    return (
      <BrowserRouter>




        <Sidebar />




        <div className='main'>
          <TopBar />
          <Routes>

            <Route path='/clientes' element={<Clientes />} />
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