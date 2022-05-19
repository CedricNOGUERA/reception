import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Homepage from './pages/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import PrivateRoute from './pages/PrivateRoute';
import Profile from './pages/Profile';
import App from './pages/App';
import NavBar from './components/NavBar';


ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
)
