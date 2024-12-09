import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'; // Cambia Navigate por useNavigate
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import data from "../../data/data.json";

const ServicesSection = () => {
    const { user, isAuthenticated } = useAuth0();
    const navigate = useNavigate(); // Añade esta línea
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedProfessional, setSelectedProfessional] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [availableHours, setAvailableHours] = useState([]);
    const [selectedHour, setSelectedHour] = useState('');
    const servicios = data.servicios;

    console.log(user.sub);

    // Función para generar horas disponibles (simulación)
    const generateAvailableHours = (professional, date) => {
        const hours = [
            '09:00', '10:00', '11:00', '12:00', '13:00', 
            '14:00', '15:00', '16:00', '17:00', '18:00'
        ];

        return hours.filter(hour => true);
    };

    useEffect(() => {
        if (selectedProfessional && selectedDate) {
            const hours = generateAvailableHours(selectedProfessional, selectedDate);
            setAvailableHours(hours);
        } else {
            setAvailableHours([]);
        }
    }, [selectedProfessional, selectedDate]);

    const openModal = (servicio) => {
        setSelectedService(servicio);
        setShowModal(true);
        setSelectedProfessional('');
        setSelectedDate('');
        setSelectedHour('');
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    const handleProfessionalChange = (e) => {
        setSelectedProfessional(e.target.value);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleHourChange = (e) => {
        setSelectedHour(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reserva:', {
            servicio: selectedService,
            professional: selectedProfessional,
            date: selectedDate,
            hour: selectedHour
        });
        closeModal();
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex flex-col gap-4 p-6 rounded-lg shadow-2xl mt-12 flex-grow">
                <h2 className="text-xl text-black/60 font-bold mt-5">Servicios</h2>
                <Accordion className="flex flex-col gap-6 shadow-xl p-6">
                    {Object.keys(servicios).map((categoria) => (
                        <AccordionTab
                            key={categoria}
                            header={<span className="text-xl font-semibold">{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</span>}
                        >
                            <div className="space-y-4">
                                {servicios[categoria].map((servicio, index) => (
                                    <div key={index} className="md:flex items-center justify-between p-6 rounded-lg shadow-lg">
                                        <div>
                                            <h3 className="text-base font-semibold">{servicio.nombre}</h3>
                                            <p className="text-gray-500">{servicio.descripcion}</p>
                                        </div>
                                        <div className="mt-3 md:mt-0 md:flex md:gap-4">
                                            <div className="md:text-center">
                                                <p className="font-bold">{servicio.precio}</p>
                                                <p>{servicio.tiempo} minutos</p>
                                            </div>
                                            <div>
                                                {isAuthenticated ? (
                                                    <Button
                                                        onClick={() => openModal(servicio)}
                                                        label="Reservar"
                                                        icon="pi pi-calendar"
                                                        className="mt-3 md:mt-0 bg-[#a16f07] hover:bg-[#8e5707] transition-all duration-300 p-2 text-white text-base font-semibold rounded-lg"
                                                    />
                                                ) : (
                                                    <Button
                                                        onClick={() => navigate("/login")} // Cambia Navigate por navigate
                                                        label="Reservar"
                                                        icon="pi pi-sign-in"
                                                        className="mt-3 md:mt-0 bg-[#a16f07] hover:bg-[#8e5707] transition-all duration-300 p-2 text-white text-base font-semibold rounded-lg"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AccordionTab>
                    ))}
                </Accordion>
            </div>
            <Footer />

            <Dialog 
                visible={showModal} 
                onHide={closeModal}
                modal 
                className="m-4 w-full md:m-0 md:w-1/3 p-5 bg-yellow-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 md:text-lg shadow-2xl"
            >
                {selectedService && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold">Tu reserva</h1>

                        <div>
                            <h2 className="text-lg font-semibold">{selectedService.nombre}</h2>
                            <p className="text-lg font-bold mt-2">{selectedService.precio}</p>
                            <p className="text-base">{selectedService.tiempo} minutos</p>
                        </div>

                        <div>
                            <select 
                                name="professional" 
                                id="professional" 
                                value={selectedProfessional}
                                onChange={handleProfessionalChange}
                                className="block w-full border border-gray-300 rounded-md p-2" 
                                required
                            >
                                <option value="" disabled>Reservar con un profesional</option>
                                <option value="ces">Cesar Gonzalez Pelayo</option>
                                <option value="dan">Daniel Albarran Gonzalez</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-lg font-medium">Fecha:</label>
                            <input
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                                id="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                className="block w-full border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>

                        {availableHours.length > 0 && (
                            <div>
                                <label htmlFor="hour" className="block text-lg font-medium">Hora:</label>
                                <select 
                                    id="hour"
                                    value={selectedHour}
                                    onChange={handleHourChange}
                                    className="block w-full border border-gray-300 rounded-md p-2"
                                    required
                                >
                                    <option value="" disabled>Selecciona una hora</option>
                                    {availableHours.map(hour => (
                                        <option key={hour} value={hour}>{hour}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <Button
                            label="Confirmar Cita"
                            icon="pi pi-check"
                            type="submit"
                            disabled={!selectedHour}
                            className="w-full bg-[#ca8a04] hover:bg-[#a16f07] text-white px-4 py-2 rounded-lg"
                        />
                    </form>
                )}
            </Dialog>
        </div>
    );
};

export default ServicesSection;