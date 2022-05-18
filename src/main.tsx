import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="*" element={<p>There's nothing here : 404!</p>} />
     
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
