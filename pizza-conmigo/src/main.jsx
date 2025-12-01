[15:16, 1/12/2025] Andrea: )
[15:17, 1/12/2025] rita diaz: import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 importamos BrowserRouter
import './App.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);