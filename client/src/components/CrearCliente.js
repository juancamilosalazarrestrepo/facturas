
import './Clientes';
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
        console.log("me monte");
        
    
    
    
    
    
      }
 
     
        reloadapi(){
         

          this.clienteshijo.consumirApi();
        }    

    apiPost(url, consecuencia) {
        fetch(url,{
            method:'POST',
            mode:'cors',
            cache:'no-cache',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json'
            }
        })
          .then(response => response.json())
          .then(data => consecuencia(data))
          .catch(error => console.log(error))
      }

      handleChange(event){
       
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
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
        <div className="lista">
        
         <div className="cardHeader">
         
        <form onSubmit={this.crearcliente}>

        <h2 className='tituloFormulario'>Crear Clientes</h2><br/>
        <label htmlFor="nombre">nombre:</label>
          <input type="text" id="nombre" name="nombre"  value={this.state.nombre}  onChange={this.handleChange} />
        <br/> <br/> 

        <label htmlFor="Apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value={this.state.apellido}  onChange={this.handleChange}  /><br/>   <br/> 
        
        <label htmlFor="cedula">Cedula:</label>
        <input type="text" id="cedula" name="cedula" value={this.state.cedula}  onChange={this.handleChange} /><br/>   <br/> 

        <label htmlFor="celular">Celular:</label>
        <input type="text" id="celular" name="celular"  value={this.state.celular}  onChange={this.handleChange}/><br/>   <br/> 

        <input type="submit" value="Submit" />
      </form>
         
      </div>
      </div>
      <Clientes ref="clienteshijo"/>
      </div>
    
    )
  }

}

export default Crearcliente;
  