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
   
   cantidad:0,

   // inicializando estados de variables de datos de  pedidos

   pedidos: [],
   idproductosDePedido: 0,
   cantidadDePedido: 0,
   valorunitario: 0,
   valorpedido:0,


   //inicializando variables de esta para las facturas
   facturas: [],
   idclientesDeFactura: 0,
   idpedidosDeFactura:0,
  valortotalDeFactura:0,

  idnuevafactura:0,
  ultimoNumeroDeFactura:0,


  // inicializando variables CLiente_pedido

  clientespedidos:[],
  idclientesCP: 0,
  idpedidosCP: 0,
  idfacturasCP: 0,
  numerofacturaCP:0,

  arraydepedidos:[],
  arrayproductos:[],
  arraycantidades:[],
  arrayprecios:[]

    
    };
        this.handleChange = this.handleChange.bind(this);
        this.crearfactura = this.crearfactura.bind(this);
        this.agregarProducto = this.agregarProducto.bind(this);
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
        this.apiCall("http://localhost:3000/api/facturas", this.mostrarFacturas);
         this.apiCall("http://localhost:3000/api/productos", this.mostrarProductos);
    
        
          this.apiCall("http://localhost:3000/api/",  this.mostrarClientes);
          
        
         
        
      }

      mostrarFacturas =  (data) => {
        console.log("this is data"+data)
        this.setState({
          facturas: data,
          idclientesDeFactura: data[0].idclientes,
          idpedidosDeFactura: data[0].idpedidos,
          valortotalDeFactura: data[0].valortotal,
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
    

        mostrarProductos =  (data4) => {
          console.log("this is data"+ data4)
          this.setState({
            productos: data4,
            nombreproducto: data4[0].nombreproducto,
            descripcion: data4[0].descripcion,
            precio: data4[0].precio
      
      
      
          })
          this.ultimafactura();
        }
        

          mostrarPedidos =  (data7) => {
            console.log("this is data"+ data7)
            this.setState({
              pedidos: data7,
              idproductosDePedido: data7[0].idproductos,
              cantidadDePedido: data7[0].cantidad,
              valorunitario: data7[0].valorunitario,
              valorpedido:data7[0].valorpedido
        
        
        
            })}



            mostrarClientesPedidos =  (data9) => {
             
              this.setState({
                clientespedidos:data9,
                idclientesCP: data9[0].idclientes,
                idpedidosCP: data9[0].idpedidos,
                idfacturasCP: data9[0].idfacturas,
                numerofacturaCP:data9[0].numerofactura
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
                        
                        valortotal:this.state.valortotal,
                        numerofactura:this.state.ultimoNumeroDeFactura + 1 ,
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


               async agregarProducto(){
                    let productoAgregado;
                    productoAgregado = this.state.productos.filter(producto => producto.idproductos == this.state.idproductos)
                    
                    
                    const nuevoPedido = {
                        
                      
                      idproductos:parseInt(this.state.idproductos),
                      cantidad:this.state.cantidad,
                      valorunitario:productoAgregado[0].precio,
                      valorpedido:productoAgregado[0].precio*this.state.cantidad
                      /* valorunitario:productoAgregado.precio,
                      valorpedido:productoAgregado.precio * this.state.cantidad */
                     
                     }


                     await fetch('http://localhost:3000/api/crearpedido',{
                        method:'POST',
                        body:JSON.stringify(nuevoPedido),
                        headers:{
                            "Content-type":'application/json'
                        }
                     })
                     


                     this.agregarRelacionClientePedido();

                     


                   }


                        // obtener el utimo id de factura para generar una nueva


                        ultimafactura(){
                          let idultimafactura;
                          let indexultimafactura;

                          let ultimoNumeroDeFactura;
                          
     
                          indexultimafactura= this.state.facturas.length;
                          idultimafactura=  this.state.facturas[indexultimafactura-1].idfacturas;
                          console.log("index ultimo factura" + idultimafactura)
                          
                          
     
                          this.setState({
                            idnuevafactura: idultimafactura + 1,
                            ultimoNumeroDeFactura: this.state.facturas[indexultimafactura-1].numerofactura 
                          
                          })


                          
                         
     
                        }


                   // agregar relacion cliente pedido

                   async agregarRelacionClientePedido(){  

                     await this.apiCall("http://localhost:3000/api/pedidos",  this.mostrarPedidos);

                    let indexultimopedido;
                    let idultimopedido;

                    

                    indexultimopedido = this.state.pedidos.length;
                    idultimopedido=this.state.pedidos[indexultimopedido-1].idpedidos;

                     this.ultimafactura();


                    console.log("este es el index" + idultimopedido )

                    const nuevoClientePedido = {
                        
                      
                      idclientes:parseInt(this.state.idclientes),
                      idpedidos:idultimopedido,
                      idfacturas:12,
                      numerofactura:this.state.ultimoNumeroDeFactura + 1
                      /* valorunitario:productoAgregado.precio,
                      valorpedido:productoAgregado.precio * this.state.cantidad */
                     
                  }



                    await fetch('http://localhost:3000/api/crearclientepedido',{
                        method:'POST',
                        body:JSON.stringify(nuevoClientePedido),
                        headers:{
                            "Content-type":'application/json'
                        }
                     })


                     await this.apiCall("http://localhost:3000/api/pedidocliente", this.mostrarClientesPedidos);

                     await this.productosDeLaFactura();


                   


                   }


                   async productosDeLaFactura(){
                    await this.apiCall("http://localhost:3000/api/pedidos",  this.mostrarPedidos)
                   
                     let pedidosFactura;
                     let productosFactura;
                     let arrayidpedidos=[];
                     
                     pedidosFactura = this.state.clientespedidos.filter(clientepedido => clientepedido.numerofactura === (this.state.ultimoNumeroDeFactura + 1));
                     console.log("productos de la factura" + pedidosFactura[0].idpedidos);

                     pedidosFactura.map((pedido)=>{
                       arrayidpedidos.push(pedido.idpedidos)

                     })

                     await this.setState({
                      arraydepedidos:arrayidpedidos
                    
                    })

                    let nombresdeproductos=[];
                    let cantidades=[];
                    let precios=[];

                    for (let i = 0; i < arrayidpedidos.length; i++) {
                      let pedidoelegido;
                      
                      pedidoelegido=this.state.pedidos.filter(pedid=>pedid.idpedidos == arrayidpedidos[i]);


                      nombresdeproductos.push(pedidoelegido[0].producto.nombreproducto)
                      cantidades.push(pedidoelegido[0].cantidad)
                      precios.push(pedidoelegido[0].producto.precio)
                    }

                    this.setState({
                      arrayproductos:nombresdeproductos,
                      arraycantidades:cantidades,
                      arrayprecios:precios
                    
                    })
                    
                   

                     console.log("productos de la facturassss"+nombresdeproductos)

                     let  valortotal=0;
                          for (let i = 0; i < this.state.arrayproductos.length; i++) {
                            valortotal+= parseInt(this.state.arrayprecios[i])*parseInt(this.state.arraycantidades[i]);
             
                          }

                          this.setState({
                           valortotal:valortotal
                          
                          })

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


                      let productosenpedido=[];
                      let valortotal=0;
                      

                      for (let i = 0; i < this.state.arrayproductos.length; i++) {
                        valortotal+= parseInt(this.state.arrayprecios[i])*parseInt(this.state.arraycantidades[i]);
                        productosenpedido.push(

                        <tr  className="columnaProduct">
                        <td >{this.state.arrayproductos[i]}</td>
                        <td >{this.state.arraycantidades[i]}</td>
                        <td >{this.state.arrayprecios[i]}</td>
                        <td >{this.state.arrayprecios[i]*this.state.arraycantidades[i]}</td>
                        
                        <td ><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
                      </tr>);


                        
                      }


                      

                      let listadodeproductos;
                      listadodeproductos= productosenpedido.map(productopedido => {
                        return(
                          productopedido
                        )
                      })

                      
                     
                      

                      
                      



         

         
    return (

     
      
        
        <div className="contenedordefacturas">
             
                  
                 
           <span>Numero de factura : {this.state.ultimoNumeroDeFactura + 1}</span> 

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
        
          
         

       


      

                     <label>valor total</label>
                     <input type="number" id="valortotal" name="valortotal" value={this.state.valortotal}  onChange={this.handleChange} />
                     
                    <span>{valortotal}</span>
        <br/> <br/> 

        
                     <input type="submit" value="agregar factura" />

                  </form>

                  <button onClick={this.agregarProducto}> Agragar producto</button>

                  <span>lista de productos</span>

                  <table>
                <thead>
                  <tr>
                  <td>Nombre producto</td>
                    <td>cantidad</td>
                    <td>precio unitario</td>
                    <td>precio total</td>
                    <td>Eliminar</td>
                  </tr>
                </thead>
                <tbody>
                  
                {listadodeproductos}

                </tbody>
              </table>

                
            </div>


          
            
      
    )
  }

}

export default CrearFactura;
  