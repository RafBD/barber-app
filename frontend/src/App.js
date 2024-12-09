import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Servicios from './pages/Servicios/Services';
import Reservations from './Client/Reservations/Reservations';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      console.log('Not authenticated, redirecting to login');
      return <Navigate to="/login" />;
    }

    return children;
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicios" element={<Servicios />} />
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