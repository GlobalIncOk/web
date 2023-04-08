import React from 'react'
import ReactDOM from 'react-dom/client'
import './Normalize.sass'
import { Budget, ClientsPages, Contact, Initial } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Initial />} />
        <Route exact path='/clients/:name' element={<ClientsPages />} />
        <Route exact path='/presupuesto' element={<Budget />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
