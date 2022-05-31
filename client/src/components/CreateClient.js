import './content.css';
import { Component } from 'react';



class CreateClient extends Component {

    

    render() {
    
    return (
      <div className='main'>
         <form>
             <label>Nombre</label><br/>
             <input type="text" /><br/>
             <label>Apellido</label><br/>
             <input type="text" /><br/>
             <br/>

             <button>boton</button>

         </form>
      </div>
    )
  }

}

export default CreateClient;