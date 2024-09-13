import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home/Home';
import BookAppointment from './pages/BookAppointment';


function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        { isAuthenticated && (
          <Route path="/book-appointment" element={<BookAppointment />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
