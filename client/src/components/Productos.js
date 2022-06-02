import './content.css';
import { Component } from 'react';



class Productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
          nombreproducto: "",
          descripcion:"",
          precio:0,
          productos: []
    
    
    
        }
      }

    apiCall(url, consecuencia) {
        fetch(url)
          .then(response => response.json())
          .then(data => consecuencia(data))
          .catch(error => console.log(error))
      }
    
    
      componentDidMount() {
        console.log("me monte");
        this.consumirApi();
    
    
    
    
    
      }

      componentDidUpdate() {

          

    }
    
      consumirApi() {
        this.apiCall("http://localhost:3000/api/productos", this.mostrarProductos);
      }
    
      mostrarProductos = (data) => {
        console.log("this is data"+ data)
        this.setState({
          productos: data,
          nombreproducto: data[0].nombreproducto,
          descripcion: data[0].descripcion,
          precio: data[0].precio
    
    
    
        })}
    

    render() {
          
        let listaProductos;
        listaProductos = this.state.productos.map((producto) => {
    
   
            return (
         <tr  className="columnaProduct">
          <td >{producto.nombreproducto}</td>
          <td >{producto.descripcion}</td>
          <td >{producto.precio}</td>
          <td ><button type="button" className="btn-editar"><ion-icon name="create-outline"></ion-icon></button></td>
          <td ><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
        </tr>    
            )
          });
    
    return (

     
      
        
        <div className="lista">
              <div className="cardHeader">
                <h2>
                  Todos los Productos
                </h2>
                <a href="/" className='btn'>Ver todos </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Nombre del producto</td>
                    <td>Descripcion</td>
                    <td>Precio</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                </thead>
                <tbody>
                  
                  {listaProductos}

                </tbody>
              </table>
            </div>
            
      
    )
  }

}

export default Productos;
  