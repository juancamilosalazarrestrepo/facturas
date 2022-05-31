import { NavLink } from "react-router-dom"
import './content.css';
import { Component } from 'react';

class TopBar extends Component {
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
            
          </div>


)
}


}



export default TopBar;