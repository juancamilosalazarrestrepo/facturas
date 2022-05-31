
import './content.css';
import { Component } from 'react';



class Clientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
          nombre: "",
          apellido:"",
          cedula:"",
          telefono:"",
    
          clientes: [],
    
    
    
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
        
        this.apiCall("http://localhost:3000/api", this.mostrarClientes);
    
    
      }
    
      mostrarClientes = (data) => {
        
        this.setState({
          clientes: data,
          nombre: data[0].nombre,
          apellido: data[0].apellido,
          cedula: data[0].cedula,
          celular: data[0].celular
    
    
    
        })}
    

    render() {
          
        let listaClientes;
        listaClientes = this.state.clientes.map((cliente) => {
    
   
            return (
         <tr  className="columnaProduct">
          <td >{cliente.nombre}</td>
          <td >{cliente.apellido}</td>
          <td >{cliente.cedula}</td>
          <td >{cliente.celular}</td>
          <td ><button type="button" className="btn-editar"><ion-icon name="create-outline"></ion-icon></button></td>
          <td ><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
        </tr>
              
               
              
              
             
            )
          });
    
    return (

     
      
        
        <div className="lista">
              <div className="cardHeader">
                <h2>
                  Todos los Clientes
                </h2>
                <a href="/" className='btn'>Ver todos </a>
              </div>
              <table>
                <thead>
                  <tr>
                  <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Cedula</td>
                    <td>Telefono</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                </thead>
                <tbody>
                  
                  {listaClientes}

                </tbody>
              </table>
            </div>
            
      
    )
  }

}

export default Clientes;
  