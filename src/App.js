import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Servicios from './pages/Servicios/Services';
import Reservations from './Client/Reservations/Reservations';

function App() {
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button type="button" class="bg-[#eaa108] text-white" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Cargando...
      </button>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicios" element={<Servicios />} />
        {/* Rutas protegidas */}
        <Route
          path="/reservas"
          element={
            <ProtectedRoute>
              <Reservations />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
