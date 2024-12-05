import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import data from "../../data/data.json";

const ServicesSection = () => {
    const { isAuthenticated } = useAuth0();
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const servicios = data.servicios;

    const openModal = (servicio) => {
        setSelectedService(servicio);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedService(null);
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
                                                        onClick={() => Navigate("/login")}
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

            {/* Modal de Reserva */}
            <Dialog 
            visible={showModal} 
            onHide={closeModal}
            modal 
            className="m-4 w-full md:m-0 md:w-1/3 p-5 bg-yellow-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 md:text-lg shadow-2xl"
            >
                {selectedService && (
                    <form className="space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold">Tu reserva</h1>

                        <div>
                            <h2 className="text-lg font-semibold">{selectedService.nombre}</h2>
                            <p className="text-lg font-bold mt-2">{selectedService.precio}</p>
                            <p className="text-base">{selectedService.tiempo} minutos</p>
                        </div>
                        <div>
                        <select name="professional" id="professional" className="block w-full border border-gray-300 rounded-md p-2" required>
                            <option value="" disabled selected>Reservar con un profesional</option>
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
                                className="block w-full border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <Button
                            label="Confirmar Cita"
                            icon="pi pi-check"
                            type="submit"
                            className="w-full bg-[#ca8a04] hover:bg-[#a16f07] text-white px-4 py-2 rounded-lg"
                        />
                    </form>
                )}
            </Dialog>
        </div>
    );
};

export default ServicesSection;
