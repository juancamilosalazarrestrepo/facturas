import './crearfactura.css';
import { Component } from 'react';
import Clientes from './Clientes';




class CrearFactura extends Component {
    constructor(props) {
        super(props);
        this.state = {
             idclientes:"",
             idpedidos:0,
             valortotal:0,
             numerofactura:0,

  //inicializando datos de clientes
             nombre: "",
          apellido:"",
          cedula:"",
          telefono:"",
          clientes:[],


   //inicializando datos para productos
   productos: [],
   nombreproducto: "",
   descripcion: "",
   precio: "" ,
   idproductos:"",     
   
   cantidad:0



    
        };
        this.handleChange = this.handleChange.bind(this);
        this.crearfactura = this.crearfactura.bind(this);
      }

    
    
      async componentDidMount() {
        console.log("me monte");
        await this.consumirApi();
        
    
    
      }

      
      async apiCall(url, consecuencia)  {
        await fetch(url)
          .then(response => response.json())
          .then(data => consecuencia(data))
          .catch(error => console.log(error))
      }

      consumirApi()  {
        this.apiCall("http://localhost:3000/api/productos", this.mostrarProductos);
        /*this.apiCall("http://localhost:3000/api/pedidocliente", this.mostrarClientesPedidos); */
        this.apiCall("http://localhost:3000/api/",  this.mostrarClientes);
  /*       this.apiCall("http://localhost:3000/api/facturas", this.mostrarFacturas); */
        
         
        
      }

      mostrarClientes =   (data2) => {
        console.log("this is data"+data2)
        this.setState({
          clientes: data2,
          nombre: data2[0].nombre,
          apellido: data2[0].apellido,
          cedula: data2[0].cedula,
          celular: data2[0].celular
    
    
    
        })}
    

        mostrarProductos =  (data4) => {
          console.log("this is data"+ data4)
          this.setState({
            productos: data4,
            nombreproducto: data4[0].nombreproducto,
            descripcion: data4[0].descripcion,
            precio: data4[0].precio
      
      
      
          })}
      
    
     

                 //--------------- funciones para crear factura-----------------//

                 handleChange(event){
       
                    const target = event.target;
                    const value = target.type === 'checkbox' ? target.checked : target.value;
                    const name = target.name;
                
                    this.setState({
                      [name]: value
                    });
                  }

                crearfactura(event) {

                
                  
                    const nuevafactura = {
                        
                        idclientes: parseInt(this.state.idclientes),
                        idpedidos:this.state.idpedidos,
                        valortotal:this.state.valortotal,
                        numerofactura:this.state.numerofactura,
                    }
                    
            
                     fetch('http://localhost:3000/api/crearfactura',{
                        method:'POST',
                        body:JSON.stringify(nuevafactura),
                        headers:{
                            "Content-type":'application/json'
                        }
                     }).then(res=>res.json())
                     .then(data5 => console.log(JSON.parse(data5)))
                     


            
                    event.preventDefault();
                  }


                  agregarProducto(){
                    let productoAgregado;
                    productoAgregado = this.state.productos.filter(producto => producto.idprodcutos == this.state.idproductos)
                    const nuevoPedido = {
                        
                      
                      idproductos:parseInt(this.state.idproductos),
                      cantidad:this.state.cantidad,
                      valorunitario:500,
                      valorpedido:5000
                      /* valorunitario:productoAgregado.precio,
                      valorpedido:productoAgregado.precio * this.state.cantidad */
                     
                  }


                     fetch('http://localhost:3000/api/crearpedido',{
                        method:'POST',
                        body:JSON.stringify(nuevoPedido),
                        headers:{
                            "Content-type":'application/json'
                        }
                     }).then(res=>res.json())
                     .then(data6 => console.log(JSON.parse(data6)))
                        }

                  
                  
    

                render() {

                  //funciones para llenar arrays para llenar los select de los formularios
          
                  let listaClientes;
                  listaClientes = this.state.clientes.map((cliente) => {
              
             
                      return (
                        <option value={cliente.idclientes}>{cliente.nombre}</option>
                       
                      )
                    });

                    let listaProductos;
                    listaProductos = this.state.productos.map((producto) => {
                
               
                        return (
                          <option value={producto.idproductos}>{producto.nombreproducto}</option>
                         
                        )
                      });



         

         
    return (

     
      
        
        <div className="contenedordefacturas">
             
                  
                 


                  <form onSubmit={this.crearfactura}>
                     
                     <label htmlFor="idclientes">cliente:</label>
        

        <select id="idclientes" name="idclientes" value={this.state.idclientes} onChange={this.handleChange} >
         {listaClientes}
         </select><br/> <br/> 
          <label>productos</label>
                     <select id="idproductos" name="idproductos" value={this.state.idproductos} onChange={this.handleChange} >
         {listaProductos}
         </select>

         <label>cantidad</label>
         <input type="number" id="cantidad" name="cantidad" value={this.state.cantidad}  onChange={this.handleChange} />
        
          
         <button onClick={this.agregarProducto}>agregar producto</button> <br/><br/>
 

                     <label>valor total</label>
                     <input type="number" id="valortotal" name="valortotal"  value={this.state.valortotal}  onChange={this.handleChange} />
        <br/> <br/> 

        <label>numero factura</label>
                     <input type="number" id="numerofactura" name="numerofactura"  value={this.state.numerofactura}  onChange={this.handleChange} />
        <br/> <br/> 
                     <input type="submit" value="Submit" />

                  </form>

                  

                
            </div>
            
      
    )
  }

}

export default CrearFactura;
  