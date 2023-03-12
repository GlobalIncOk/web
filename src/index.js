import React from 'react';
import ReactDOM from 'react-dom/client';
import './variables.sass';
import './normalize.sass';
import { Initial } from './pages/Initial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Initial />
  </React.StrictMode>
);
