import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/nav'
import Portada from '../components/portada';
import Integrantes from '../components/integrantes';
import '../styles/app-global.css'
function App() {
  return (
    <>

          <div className="full-app">
            <div className="header">
            <div className='banner'>ARGM for friends</div>
              <Nav />
            
            </div>
            <Routes>
              <Route path="/" element={<Portada/>} />
              <Route path="/portada" element={<Portada />} />
              <Route path="/integrantes" element={<Integrantes />} />
            </Routes>
          </div>
      
    </>
  );
}

export default App;