import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import BookAppointment from './pages/BookAppointment';
import ProtectedRoute from './components/ProtectedRoute';
import Servicios from './pages/Servicios/Services';

function App() {
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
        <Route path="/services" element={<Servicios />} />
        {/* Usamos ProtectedRoute para proteger BookAppointment */}
        <Route
          path="/book-appointment"
          element={<ProtectedRoute component={BookAppointment} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
