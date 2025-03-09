import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/app'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router basename='/the-website-salon'>
        <App></App>
    </Router>
  </StrictMode>
)
