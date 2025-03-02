import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portada from '../components/portada'
import Integrantes from '../components/integrantes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Integrantes></Integrantes>
  </StrictMode>
)
