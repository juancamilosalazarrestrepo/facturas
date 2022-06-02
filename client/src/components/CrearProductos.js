import './content.css';
import { Component } from 'react';
import Productos from './Productos';
import productoimg from '../img/producto.png';




class CrearProducto extends Component {

    constructor(props) {
        super(props);
        this.state = {
          productonuevo:[],
          nombreproducto: "",
          descripcion: "",
          precio: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.crearproducto = this.crearproducto.bind(this);
       
      }
    

    

      handleChange(event){
       
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }



      crearproducto(event) {

        
       
        const nuevoProducto = {
            nombreproducto:this.state.nombreproducto,
            descripcion:this.state.descripcion,
            precio:this.state.precio
           
        }

        fetch('http://localhost:3000/api/crearproducto',{
            method:'POST',
            body:JSON.stringify(nuevoProducto),
            headers:{
                "Content-type":'application/json'
            }
         }).then(res=>res.json())
         .then(data => console.log(JSON.parse(data)))
         
         setTimeout(() => window.location.reload(true), 300);
        event.preventDefault();
      }
      
    
     
    
    
    
    
             
      

    render() {
          
         
    
    return (
       
      <div className='contenedorFormLista'>

        <div className="contenedorFormUser">
        <div className="formulario">
         <div className="cardHeader">
         
        <form onSubmit={this.crearproducto}>

        <h2 className='tituloFormulario'>Crear Producto</h2><br/>
        <label htmlFor="nombre">nombre del producto:</label><br/>
          <input type="text" id="nombreproducto" name="nombreproducto"  value={this.state.nombreproducto}  onChange={this.handleChange} placeholder="Escribe el nombre del producto" />
        <br/> <br/> 

        <label htmlFor="Apellido">descripcion:</label><br/>
        <input type="text" id="descripcion" name="descripcion" value={this.state.descripcion}  onChange={this.handleChange}  placeholder="Escriba la descripcion del producto"/><br/>   <br/> 
        
        <label htmlFor="cedula">Precio:</label><br/>
        <input type="number" id="precio" name="precio" value={this.state.precio}  onChange={this.handleChange} /><br/>   <br/> 

        

        <input type="submit" value="Crear Producto" className="btnCrearCliente"  />
      </form>
         
      </div>

      </div>
      <div className="formulario">
      <div className="cardClienteNuevo">
         <h2 className='tituloFormulario'>Producto Nuevo</h2><br/>
        

          <div className='usuarionuevo'>
        

            <div className='contenedorAvatar'><img className='avatarproducto' src={productoimg} alt="" /></div>
            
           <div className='campos'><span className='titulocampo'>Nombre de producto: </span><span>{this.state.nombreproducto}</span></div>
          <div className='campos'><span className='titulocampo'>Descripcion: </span><span>{this.state.descripcion}</span></div>
          <div className='campos'><span className='titulocampo'>Precio: </span><span>{this.state.precio}</span></div>
          
          
        
          

          </div>
         
          
         
      </div>
      
      </div>
      </div>
      <Productos/>
      </div>
    
    )
  }

}

export default CrearProducto;