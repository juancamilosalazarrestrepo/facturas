
import './topbar.css';
import { Component } from 'react';
import userFoto from '../img/user.jpg';

class TopBar extends Component {


  // --------------------- metodo para funcionalidad de boton para replegar la sidebar ------------------
    handleClick = () => {
        let nav = document.querySelector('.navigation');
        let main = document.querySelector('.main')
        nav.classList.toggle('active');
        main.classList.toggle('active')
      }

    render() {
    
        return (

        <div className='topbar'>
          <div className="toggle" onClick={this.handleClick}>
              <ion-icon name="menu-outline"></ion-icon>
          </div>
            {/*  search */}
          <div className="search">
            <label htmlFor="">
              <input type="text" placeholder='Buscar Aqui' />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>
          {/* userimg */}
          <div className="user">
            <img src={userFoto} alt="" />
          </div>
       </div>
             )
            }


}

export default TopBar;