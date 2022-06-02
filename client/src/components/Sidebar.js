import { NavLink } from "react-router-dom"
import './sidebar.css';
import { Component } from 'react';




class Sidebar extends Component {

    render() {
    
        return (


     <div className='navigation'>
          <ul>
            <li >
              <div className="logoSection">
                <span className='icon'><img className="logoNavbar" src="http://localhost:3000/img/kenzalogo.png" alt="" /></span>
                <span className="title benza">Benza Soft</span>
                
              </div>
            </li>
            
            
            <li>
              <div>
                
                <span className="title"><NavLink className={({isActive})=>isActive ? 'active' : ""} to="/clientes"><span className='icon'><ion-icon name="home-outline"></ion-icon></span>Clientes</NavLink></span>
                
              </div>
            </li>
            
            <li>
            <div>
              <span className="title"><NavLink className={({isActive})=>isActive ? 'active' : ""} to="/crearcliente"><span className='icon'><ion-icon name="person-add"></ion-icon></span>Crear Cliente</NavLink></span>
              
              </div>
              
            </li>
            <li>
              <div>
                <span className="title"><NavLink className={({isActive})=>isActive ? 'active' : ""} to="/productos"><span className='icon'><ion-icon name="cube"></ion-icon></span>Lista de Productos</NavLink></span>
              </div>
            </li>
            <li>
              <div>
                
                <span className="title"> <NavLink className={({isActive})=>isActive ? 'active' : ""} to="/facturas"><span className='icon'><ion-icon name="document"></ion-icon></span>Facturas</NavLink></span>
              </div>
            </li>
            <li>
              <div>
                
                <span className="title"><NavLink className={({isActive})=>isActive ? 'active' : ""} to="/crearfactura"><span className='icon'><ion-icon name="add"></ion-icon></span>Crear Factura</NavLink></span>
              </div>
            </li>
            <li>
              <div>
                
                <span className="title"><NavLink className={({isActive})=>isActive ? 'active' : ""} to="/crearfactura"><span className='icon'><ion-icon name="log-out-outline"></ion-icon></span>Salir</NavLink></span>

              </div>
            </li>


          </ul>
        </div>
        )
    }


}



export default Sidebar;