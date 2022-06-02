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
          precio: "",

          pedidos: [],
          idproductosDePedido: 0,
          cantidadDePedido: 0,
          valorunitario: 0,
          valorpedido:0,
          ultimopedidoid:0,
       

          valortotaldefactura:0
    
    
    
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
        this.apiCall("http://localhost:3000/api/pedidos", this.mostrarPedidos);
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

                mostrarPedidos =  (data7) => {
                  console.log("this is data"+ data7)
                  let idultimopedido;
                        idultimopedido=this.state.pedidos[this.state.pedidos.length-1];
                  this.setState({
                    pedidos: data7,
                    idproductosDePedido: data7[0].idproductos,
                    cantidadDePedido: data7[0].cantidad,
                    valorunitario: data7[0].valorunitario,
                    valorpedido:data7[0].valorpedido,
                    ultimopedidoid:idultimopedido
              
              
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
            let pedido; 
            
            

            console.log(listaclientepedido[j])
            pedido=listaclientepedido[j].idpedidos
            productopedido =this.state.pedidos.find(ped => ped.idpedidos == pedido);
            console.log(productopedido)

            console.log(productopedido)
             listapedidos.push( {
              producto: productopedido.producto.nombreproducto,
              cantidad: productopedido.cantidad,
              precio: productopedido.valorunitario,
              valorpedido: productopedido.valorpedido
              
            })

            htmlpedido = listapedidos.map(pedido=>{
              var valortotal;
              valortotal += pedido.valorpedido;

              
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
              <h3 className='nombrecliente'>cliente: {this.state.facturas[i].cliente.nombre} </h3>
              
              <table className='tablaProductos'>
              <thead>
                <tr>
                  <td>Nombre Producto</td>
                  
                  <td>cantidad</td>
                  <td>precio</td>
                  <td>valor pedido</td>
                  <td>Editar</td>
                  <td>Eliminar</td>
                </tr>
              </thead>
              <tbody>
                
                {htmlpedido}

              </tbody>
              
            <h3 className='valortotal'>Valor total : {this.state.facturas[i].valortotal}</h3>
            </table>
            

            
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


                 



                
            </div>
            
      
    )
  }

}

export default Facturas;
  