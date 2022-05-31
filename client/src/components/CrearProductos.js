import './content.css';
import { Component } from 'react';
import Productos from './Productos';



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
         

        event.preventDefault();
      }
      
    
     
    
    
    
    
             
      

    render() {
          
         
    
    return (
       
      <div className='contenedorFormLista'>
        <div className="lista">
        
         <div className="cardHeader">
         
        <form onSubmit={this.crearproducto}>

        <h2 className='tituloFormulario'>Crear Producto</h2><br/>
        <label htmlFor="nombre">nombre del producto:</label><br/>
          <input type="text" id="nombreproducto" name="nombreproducto"  value={this.state.nombreproducto}  onChange={this.handleChange} />
        <br/> <br/> 

        <label htmlFor="Apellido">descripcion:</label><br/>
        <input type="text" id="descripcion" name="descripcion" value={this.state.descripcion}  onChange={this.handleChange}  /><br/>   <br/> 
        
        <label htmlFor="cedula">Precio:</label><br/>
        <input type="number" id="precio" name="precio" value={this.state.precio}  onChange={this.handleChange} /><br/>   <br/> 

        

        <input type="submit" value="Submit" />
      </form>
         
      </div>
      </div>
      <Productos/>
      </div>
    
    )
  }

}

export default CrearProducto;