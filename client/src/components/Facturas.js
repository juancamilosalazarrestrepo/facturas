import './facturas.css';
import { Component } from 'react';



class Facturas extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
          idclientes: "",
          idpedidos:"",
          valortotal:"",
    
          facturas: [],

          //inicializacion de estados para clientes

          nombre: "",
          apellido:"",
          cedula:"",
          telefono:"",
    
          clientes: [],

          idclientesCP: "",
          idpedidosCP: "",
          idfacturasCP: "",
          numerofactura:"",
          
          clientespedidos: [],

          productos: [],
          nombreproducto: "",
          descripcion: "",
          precio: ""
    
    
    
        }
      }

      async apiCall(url, consecuencia)  {
        await fetch(url)
          .then(response => response.json())
          .then(data => consecuencia(data))
          .catch(error => console.log(error))
      }
    
    
      async componentDidMount() {
        console.log("me monte");
        await this.consumirApi();
    
    
    
    
    
      }
    
      consumirApi()  {
        this.apiCall("http://localhost:3000/api/productos", this.mostrarProductos);
        this.apiCall("http://localhost:3000/api/pedidocliente", this.mostrarClientesPedidos);
        this.apiCall("http://localhost:3000/api/",  this.mostrarClientes);
        this.apiCall("http://localhost:3000/api/facturas", this.mostrarFacturas);
        
         
        
      }
    
     mostrarFacturas =  (data) => {
        console.log("this is data"+data)
        this.setState({
          facturas: data,
          idclientes: data[0].idclientes,
          idpedidos: data[0].idpedidos,
          valortotal: data[0].valortotal,
        })}

        mostrarClientes =   (data2) => {
            console.log("this is data"+data2)
            this.setState({
              clientes: data2,
              nombre: data2[0].nombre,
              apellido: data2[0].apellido,
              cedula: data2[0].cedula,
              celular: data2[0].celular
        
        
        
            })}

            mostrarClientesPedidos =  (data3) => {
             
              this.setState({
                clientespedidos:data3,
                idclientesCP: data3[0].idclientes,
                idpedidosCP: data3[0].idpedidos,
                idfacturas: data3[0].idfacturas,
                numerofactura:data3[0].numerofactura
              })}

              mostrarProductos =  (data4) => {
                console.log("this is data"+ data4)
                this.setState({
                  productos: data4,
                  nombreproducto: data4[0].nombreproducto,
                  descripcion: data4[0].descripcion,
                  precio: data4[0].precio
            
            
            
                })}
    

                render() {
          
        let listaFacturas;
        let listaproductos;

        let productos;

        let nombresdeproductos;

        let valorTotalfactura= 0;




        
        
        
        listaFacturas = this.state.facturas.map( (factura) => {
          
         
          console.log(factura)
          listaproductos=  this.state.clientespedidos.filter(clientepedido => clientepedido.idclientes === factura.idclientes)
          
           

         

           productos=   listaproductos.map( (producto) =>  {
            
             nombresdeproductos =  this.state.productos.filter(product => product.idproductos === producto.pedidos[0].idproductos);
            console.log(nombresdeproductos);

            valorTotalfactura += (nombresdeproductos[0].precio *  producto.pedidos[0].cantidad)

            return (

          <tr  className="columnaProduct">


      
          <td >{nombresdeproductos[0].nombreproducto}</td>
          <td >{nombresdeproductos[0].precio}</td>
          <td> {producto.pedidos[0].cantidad}</td>
          <td> { nombresdeproductos[0].precio *  producto.pedidos[0].cantidad}</td>
          
          
          
          <td ><button type="button" className="btn-editar"><ion-icon name="create-outline"></ion-icon></button></td>
          <td ><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
        </tr>
            
            
            )
           })

         
            return (


              <div className='cardfactura'>
                <span className='nombrecliente'>cliente: {factura.cliente.nombre + " " + factura.cliente.apellido} </span>
                
                <table className='tablaProductos'>
                <thead>
                  <tr>
                    <td>Nombre Producto</td>
                    <td>precio unitario</td>
                    <td>cantidad</td>
                    <td>valor</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                </thead>
                <tbody>
                  
                  {productos}

                </tbody>
              </table>
              <span>Valor total {valorTotalfactura} </span>
              
              <span className='restaurar'> {valorTotalfactura = 0} </span>
              </div>
         
         
               
              
              
             
            )
            
            
          });
    
    return (

     
      
        
        <div className="contenedordefacturas">
             
                  
                  {listaFacturas}


                  <form>
                     <label>cliente</label>
                     <input type="number" />
                     <label>producto</label>
                     <input type="number" />
                     <label>cantidad</label>
                     <input type="number" />
                     <button>añadir producto</button>

                  </form>



                
            </div>
            
      
    )
  }

}

export default Facturas;
  