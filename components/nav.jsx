import { Link } from 'react-router-dom'
import '../styles/nav.css'





function Nav (){

    return(
       
      <div className="container-full-nav">
        <div className='nav'>
            <div className='logo-nav'></div>
            <div className='others-nav'>
              <Link to="/portada" className={({ isActive }) => (isActive ? "active" : "")}>Inicio</Link>
            </div>
              
            <div className='others-nav'>
              <Link to="/integrantes">Integrantes</Link>
            </div>
        </div>
      </div>
       

        
    )




}export default Nav