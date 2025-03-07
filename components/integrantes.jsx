import { motion } from 'framer-motion';
import '../styles/integrantes.css'
import { useState,useEffect} from 'react';
import Nav from './nav';



function Integrantes (){
    const [mostrar, setmostrar] = useState(0);
    const [miembroactivo, setmiembroactivo] = useState(null);
    const [estaabierto, setestaabierto] = useState(false); 
    const [opcion,setopcion] = useState (null);

    const click_opcion1 = () => setopcion('content1');
    const click_opcion2 = () => setopcion('content2');

    const personas = [
        { id: 1, name: "Yerson", role: "si", img: "" },
        { id: 2, name: "alejandro", role: "si", img: "" },
        { id: 3, name: "furro", role: "si", img: "" },
        { id: 4, name: "nahum", role: "si", img: "" },
        { id: 5, name: "floppa", role: "si", img: "" }
      ];

        
      
    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const index = Math.min(Math.floor(scrollY / 300), personas.length - 1);
        setmostrar(index);
    };


      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const clickcard = (member) =>{
        if(miembroactivo?.id === (member.id)){
            setestaabierto(false)
            setmiembroactivo(null)
        }else{
            setestaabierto(true)
            setmiembroactivo(member)
        }
    }





    return(
        <div className='container-full'>
        <div className="header">
            <p className='banner'>ARGM for friends</p>
            <Nav></Nav>
        </div>

        {opcion === null && (
              <div className='eleccion-contenido-cards'>
              <div className="integrantes">
                  <h1>Integrantes</h1>
                  <p>
                    Descripcion

                  <button className='btn-eleccion' onClick={click_opcion1}>Elegir</button>
                  </p>
                 
              </div>
              <div className="sinfuncion">
                  
              </div>
             
          </div>
        )}

        {opcion === 'content1' &&(
            <div className="arboldeintegrantes">
            <motion.div
                className="linea"
                initial={{ height: 0}}
                animate={{ height: mostrar * 22 + "%" }} 
                transition={{ duration: 1 }}
            />
                {personas.map((member, index) =>(
                        
                    <motion.div
                 
                        key={member.id}
                        className="card"
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: mostrar === index ? 1 : 0, y: mostrar === index ? 50 : -100, 
                            scale: miembroactivo?.id === member.id && estaabierto ? 1.5: 1,
                           
                              
                        }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 60 }}
                        onClick={() => clickcard(member)}
                     
                    >
                        <img src={member.img} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
    
                        {miembroactivo?.id === member.id && estaabierto && (
                                <div className="card-details">
                                    
                                    h
                                </div>
                            )}
                        
                    </motion.div>
                
                ))}
            </div>  
        )}
        </div>
    )
}export default Integrantes