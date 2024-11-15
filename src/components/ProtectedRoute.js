import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Componente de ruta protegida
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  // Si el usuario no está autenticado, lo redirige a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;  // Si está autenticado, muestra la página solicitada
};

export default ProtectedRoute;
