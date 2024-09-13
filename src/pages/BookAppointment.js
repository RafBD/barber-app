import React, { useState } from 'react';
import { LogOutButton } from '../components/logout/LogOut';
import NavBar from "../components/navbar/NavBar";

const services = [
  { id: 1, name: 'Corte de cabello', price: 150 },
  { id: 2, name: 'Afeitado', price: 100 },
  { id: 3, name: 'Corte y barba', price: 200 },
];

const BookAppointment = () => {
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      service: selectedService,
      date,
      time,
    };
    console.log('Cita agendada:', appointment);
    // Aquí podrías guardar la cita en la base de datos o mostrar una confirmación
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <NavBar />
      <LogOutButton />
        <h1 className="text-3xl font-bold mb-6">Agendar una Cita</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="service" className="block text-lg font-medium">
                Selecciona un servicio:
            </label>
            <select
                id="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
            >
                <option value="">Selecciona un servicio</option>
                {services.map((service) => (
                <option key={service.id} value={service.name}>
                    {service.name} - ${service.price}
                </option>
                ))}
            </select>
            </div>

            <div>
            <label htmlFor="date" className="block text-lg font-medium">
                Fecha:
            </label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
            />
            </div>

            <div>
            <label htmlFor="time" className="block text-lg font-medium">
                Hora:
            </label>
            <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
            />
            </div>

            <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
            Confirmar Cita
            </button>
        </form>
    </div>
  );
};

export default BookAppointment;
