import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/Registro.css';
import Swal from 'sweetalert2';
const API_URL = import.meta.env.VITE_API_URL;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

 const iniciarSesion = async () => {
  try {
    const response = await fetch(`${API_URL}/clientes/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre_usuario: email.trim().toLowerCase(),
    contraseña: clave
  })
});

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('cliente', JSON.stringify(data.cliente));

        Swal.fire('Inicio de sesión correcto', 'Bienvenido a Pizza Conmigo 🍕', 'success');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        Swal.fire('Error', data.message || 'Usuario o clave incorrectos', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'No se pudo conectar al servidor', 'error');
    }
  };

  return (
    <main>
      <div className="formulario">
        <h3>Iniciar sesión</h3>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          className="form-control mb-3"
        />
        <button className="boton-login" onClick={iniciarSesion}>
          Entrar
        </button>
        <button id="volver" onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
    </main>
  );
}

export default LoginForm;