
import './crearcliente.css';
import { Component } from 'react';
import Clientes from './Clientes';



class Crearcliente extends Component {

    constructor(props) {
        super(props);
        this.state = {
          clientenuevo:[],
          nombre: "",
          apellido: "",
          cedula: "",
          celular: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.crearcliente = this.crearcliente.bind(this);
       
      }

      componentDidMount() {
       
      }
 
     
      reloadapi(){
       this.clienteshijo.consumirApi();
      }    
      
      handleChange(event){
       
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }



      crearcliente(event) {

        
       
        const nuevoCliente = {
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            cedula:this.state.cedula,
            celular:this.state.celular,
           
        }

        fetch('http://localhost:3000/api/crearcliente',{
            method:'POST',
            body:JSON.stringify(nuevoCliente),
            headers:{
                "Content-type":'application/json'
            }
         }).then(res=>res.json())
         .then(data => console.log(JSON.parse(data)))

        event.preventDefault();
      }
      

    render() {
          
         
    
    return (
       
      <div className='contenedorFormLista'>
        <div className='contenedorFormUser'>
        <div className="formulario">
        
         <div className="cardHeader">
         
        <form onSubmit={this.crearcliente}>

        <h2 className='tituloFormulario'>Crear Clientes</h2><br/>
        <hr/>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"  value={this.state.nombre}  onChange={this.handleChange} placeholder="Escribe el nombre del cliente" />
        <br/> <br/> 

        <label htmlFor="Apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value={this.state.apellido}  onChange={this.handleChange} placeholder="Escribe el apellido del cliente" /><br/>   <br/> 
        
        <label htmlFor="cedula">Cedula:</label>
        <input type="text" id="cedula" name="cedula" value={this.state.cedula}  onChange={this.handleChange}  placeholder="Escribe la cedula del cliente"/><br/>   <br/> 

        <label htmlFor="celular">Celular:</label>
        <input type="text" id="celular" name="celular"  value={this.state.celular}  onChange={this.handleChange} placeholder="Escribe el numero de celular del cliente"/><br/>   <br/> 

        <input type="submit" className="btnCrearCliente" value="Crear Cliente" />
      </form>
         
      </div>
      </div>
      <div className="formulario">
        
         <div className="cardClienteNuevo">
         <h2 className='tituloFormulario'>Cliente Nuevo</h2><br/>
        

          <div className='usuarionuevo'>
        

            <div className='contenedorAvatar'><img className='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU" alt="" /></div>
            
           <div className='campos'><span className='titulocampo'>Nombre: </span><span>{this.state.nombre}</span></div>
          <div className='campos'><span className='titulocampo'>Apellido: </span><span>{this.state.apellido}</span></div>
          <div className='campos'><span className='titulocampo'>Cedula: </span><span>{this.state.cedula}</span></div>
          <div className='campos'>  <span className='titulocampo'>Celular: </span><span>{this.state.celular}</span></div>
          
        
          

          </div>
         
          
         
      </div>
      </div>
      </div>
      <Clientes ref="clienteshijo"/>
      </div>
    
    )
  }

}

export default Crearcliente;
  