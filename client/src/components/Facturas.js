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
         let htmlfacturas=[];
         let htmlfacturas2;
         
        for (let i = 0; i < this.state.facturas.length; i++) {
          
          let listaclientepedido;
          
          listaclientepedido = this.state.clientespedidos.filter(clientepedido => clientepedido.numerofactura == this.state.facturas[i].numerofactura);
           
        
          var listapedidos=[];
          let htmlpedido=[]; 
             
          for (let j = 0; j < listaclientepedido.length; j++) {
            let productopedido; 
            
            productopedido =this.state.productos.find(producto => producto.idproductos == listaclientepedido[j].pedidos[0].idproductos)
            console.log(productopedido)
             listapedidos.push( {
              producto: productopedido.nombreproducto,
              cantidad: listaclientepedido[j].pedidos[0].cantidad,
              precio: productopedido.precio,
              valorpedido: productopedido.precio *  listaclientepedido[j].pedidos[0].cantidad
              
            })

            htmlpedido = listapedidos.map(pedido=>{
              return(
                <tr  className="columnaProduct">


      
                <td >{pedido.producto + "2"}</td>
                <td >{pedido.cantidad}</td>
                <td> {pedido.precio}</td>
                <td> {pedido.valorpedido}</td>
                
                
                
                <td ><button type="button" className="btn-editar"><ion-icon name="create-outline"></ion-icon></button></td>
                <td ><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
              </tr>
              )
            })

            console.log(htmlpedido);
             
          }





          console.log(listapedidos);
          
          htmlfacturas.push(
            <div className='cardfactura'>
              <span className='nombrecliente'>cliente: {this.state.facturas[i].cliente.nombre} </span>
              
              <table className='tablaProductos'>
              <thead>
                <tr>
                  <td>Nombre Producto</td>
                  
                  <td>cantidad</td>
                  <td>valor</td>
                  <td>precio unitario</td>
                  <td>Editar</td>
                  <td>Eliminar</td>
                </tr>
              </thead>
              <tbody>
                
                {htmlpedido}

              </tbody>
            </table>
            <span>Valor total </span>
            
            <span className='restaurar'> </span>
            </div>
       )
          htmlfacturas2= htmlfacturas.map(html => {
            return(
              html
            )
          })
           
          
        }

        
        

         
            
    
    return (

     
      
        
        <div className="contenedordefacturas">
             
                  
                  {htmlfacturas2}


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
  