import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import BookAppointment from './pages/BookAppointment';
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
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/services" element={<Servicios />} />
        {/* Rutas protegidas */}
        <Route
          path="/reservations"
          element={
            <ProtectedRoute>
              <Reservations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book"
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
