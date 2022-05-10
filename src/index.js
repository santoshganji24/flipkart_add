import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SeachUrl from './Components/SearchUrl';
import SingleProduct from './Components/SingleProduct';
import Login from './Components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/search' element={<SeachUrl />} />
      <Route path=':id' element={<SingleProduct />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={"sorry page not found"} />
    </Routes>
  </BrowserRouter>

);

