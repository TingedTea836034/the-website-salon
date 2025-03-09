import '../styles/portada.css'
import React, { useEffect, useState } from 'react';
import Nav from './nav';


function Portada () {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const textobienvenida = [
        'La pagina que nadie pidio',
        'Para todos ustedes',
        'the salon website',
        'Gracias por visitarnos',
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textobienvenida.length);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        
        <div className="container-full-portada">
          <div className='texto-portada'>
           <p className='texto-animacion'>{textobienvenida[currentTextIndex]}</p>
          </div>
          <button className="btn-start">Iniciar</button>
        </div>
    );
}

export default Portada;